import React from 'react';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import './About.css';
const About = () => {
	return (
		<div className='relative padding-about'>
			<div className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'></div>
			<div className='container mx-auto px-4'>
				<div className='items-center flex flex-wrap'>
					<div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
						<img
							alt='...'
							className='max-w-full rounded-lg shadow-lg'
							src='https://i.ibb.co/grHbVD1/header2.jpg'
						/>
					</div>
					<div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
						<div className='md:pr-12'>
							<div className='text-pink-600 p-2 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-400'>
								<HiOutlineDocumentDuplicate></HiOutlineDocumentDuplicate>
							</div>
							<h3 className='text-3xl font-bold rainbow-text'>
								About Us
							</h3>
							<p className='mt-4 text-lg leading-relaxed text-gray-600'>
								Find your dream Apartments For Rent! The Best
								Resources. Always Facts. Privacy Friendly.
								Unlimited Access. Results & Answers. Completely
								Secure. Services: Best Results, Explore Now, New
								Sources, Best in Search.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
