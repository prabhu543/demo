import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react';

const Dashboard = async () => {
	const user = await currentUser();
	if (!user) {
		return (
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-red-500'>Please sign in to access the dashboard</h1>
			</div>
		);
	}
	const dbUser = await prisma.user.findUnique({
		where: {
			id: user.id,
		},
	});
	return (
		<div className='mt-20 w-full p-4'>
			<h1>welcome {dbUser?.name}</h1>
		</div>
	);
};

export default Dashboard;
