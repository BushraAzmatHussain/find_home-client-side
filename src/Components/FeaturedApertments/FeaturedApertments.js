import React from 'react';
import './FeaturedApertments.css';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

const FeaturedApertments = () => {
	return (
		<div className='bg-slat-50 pt-8'>
			<h1 className='text-center padding-text text-3xl font-bold drop-shadow-2xl rainbow-text'>
				Our Featured Properties
			</h1>
			{/* <p className='text-center pt-4 pb-0 font-bold text-cyan-500 drop-shadow-2xl hover:text-orange-700'>Lorem gggg kkklll bdhhf dhjdhfhfd fehjfhfhfhfe
				rehhjfhjhjjrgjgrjgr
			</p> */}
			<div className='flex min-h-screen items-center justify-center'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 padding-features'>
					<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg cards'>
						<div className='h-96 w-72'>
							<img
								className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
								src='https://i.ibb.co/vP2Z1HG/C-23-0000-1300x1300-acf-cropped-650x650.jpg'
								alt=''
							/>
						</div>
						<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
						<div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
							<h1 className='font-dmserif text-xl font-bold text-yellow-400'>
								Brand New Apartment
							</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								650 EGP/day
								<br />
								4 Bath
								<br />
								5 room
								<br />
								450 sqft
								<br />
								<div className='social-icons'>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiOutlineStar></HiOutlineStar>
								</div>
							</p>
							<button className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
								See More
							</button>
						</div>
					</div>
					<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg cards'>
						<div className='h-96 w-72'>
							<img
								className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
								src='https://i.ibb.co/K6k7vn9/furnished-apartment-1.jpg'
								alt=''
							/>
						</div>
						<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
						<div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
							<h1 className='font-dmserif text-xl font-bold text-yellow-400'>
								Modern Furnished Apartment
							</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								250 EGP/day
								<br />
								2 Bath
								<br />
								3 room
								<br />
								350 sqft
								<br />
								<div className='social-icons'>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiOutlineStar></HiOutlineStar>
								</div>
							</p>
							<button className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
								See More
							</button>
						</div>
					</div>
					<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg cards'>
						<div className='h-96 w-72'>
							<img
								className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
								src='https://i.ibb.co/SPpNmSQ/shutterstock-328384091-e1501742707589.jpg'
								alt=''
							/>
						</div>
						<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
						<div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
							<h1 className='font-dmserif text-xl font-bold text-yellow-400'>
								Semi Furnished Apartment
							</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								450 EGP/day
								<br />
								2 Bath
								<br />
								5 room
								<br />
								350 sqft
								<br />
								<div className='social-icons'>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiStar></HiStar>
									<HiOutlineStar></HiOutlineStar>
								</div>
							</p>
							<button className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
								See More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedApertments;
