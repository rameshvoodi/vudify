import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className=' max-w-[1240px] justify-between items-center mx-auto h-[69px] shadow-md bg-black text-white scroll-smooth'>
			<Head>
				<title>vudify</title>
				<link
					rel='icon'
					type='image/png'
					sizes='50x50'
					href='/logo.png'
				/>
			</Head>
			<div className=' flex  items-center'>
				<h1 className=' w-full m-4 text-3xl font-bold'>vudify</h1>
				<ul className=' flex '>
					<li className=' p-4 cursor-pointer text-gray-400 '>
						<Link href='/#services'>services</Link>
					</li>
					<li className=' p-4 cursor-pointer text-gray-400 '>
						<Link href='/#contact'>contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
