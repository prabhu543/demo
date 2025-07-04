import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const user = await currentUser();
  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-red-500'>Please sign in to access the dashboard</h1>
      </div>
    );
  }

  // Make sure to await the Prisma query
  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  // If user doesn't exist in DB, create them
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        name: user.fullName || `${user.firstName || ''} ${user.lastName || ''}`,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>welcome {dbUser?.name}</h1>
      <Link href='/dashboard'>
        <Button variant='outline'>Dashboard</Button>
      </Link>
    </div>
  );
};

export default Home;
