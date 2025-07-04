import { Button } from '@/components/ui/button';
import { currentUser } from '@clerk/nextjs/server';
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
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1>Hello world!!</h1>
			<Button>Dashboard</Button>
		</div>
	);
};

export default Home;
