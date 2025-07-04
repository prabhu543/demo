import { currentUser } from '@clerk/nextjs/server';
import React from 'react';

const Dashboard = async () => {
	const user = await currentUser();
	return (
		<div>
			<h1>welcome {user?.firstName}</h1>
		</div>
	);
};

export default Dashboard;
