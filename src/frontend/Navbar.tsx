import { Button } from '@/components/ui/button';
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs';
import React from 'react';

const Navbar = () => {
	return (
		<>
			<header className='flex justify-end items-center p-4 gap-4 h-16 fixed top-0 left-0 right-0 dark:bg-gray-400 shadow-md z-50'>
				<SignedOut>
					<SignInButton mode='modal'>
						<Button variant='ghost'>Sign In</Button>
					</SignInButton>
					<SignUpButton mode='modal'>
						<Button variant='default'>Sign Up</Button>
					</SignUpButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</header>
		</>
	);
};

export default Navbar;
