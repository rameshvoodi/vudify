import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
	return (
		<div
			name='services'
			className='max-w-[1240px] flex flex-col items-center mx-auto h-[600px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 scroll-smooth '
		>
			<h1 className=' text-5xl mt-16 font-serif font-semibold ml-4 sm:ml-0'>
				We are a digital marketing agency
			</h1>
			<p className=' text-3xl mt-16 ml-4 sm:ml-0'>
				We help businesses by providing services: social media
				advertising, SEO and copywriting
			</p>
			<p className=' text-2xl mt-16 ml-5 sm:ml-0 mb-3 sm:mb-0'>
				hop on for a free strategy call and increase your sales
			</p>
			{/* <div className=' mt-[200px]'>
				<Link
					href='/#services'
					className='relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
				>
					<span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute mt-18 sm:mt-0'></span>
					<span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
						<span className='relative text-white'>Get started</span>
					</span>
				</Link>
			</div> */}
		</div>
	);
};

export default Hero;
