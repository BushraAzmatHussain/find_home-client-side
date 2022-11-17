import React from 'react';

const ChooseUs = () => {
	return (
		<div className='relative padding-about'>
			<div className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'></div>
			<div className='container mx-auto px-4'>
				<div className='items-center flex flex-wrap'>
					<div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
						<div className='md:pr-12'>
							<h3 className='font-bolder p-4 rainbow-text'>
								Why Choose Us
							</h3>
							<p className='mt-4 text-xl leading-relaxed text-gray-600 pt-4'>
								We are convinced that delivering a completely
								satisfying home selling and buying experience
								requires proactiveness and an ability to
								maintain solid communications throughout the
								transaction process. Our knowledge, experience,
								expertise and resources set us apart allowing us
								to achieve results that don’t just meet, but
								exceed our clients’ expectations. It is our
								commitment to provide you with exceptional
								service from a team of highly skilled, uniquely
								talented individuals with high integrity,
								extensive professional knowledge and experience,
								far‐reaching connections and excellence in home
								marketing.
							</p>
						</div>
					</div>
					<div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
						<img
							alt='...'
							className='max-w-full shadow-lg'
							src='https://michealadianedesigns.com/wp-content/uploads/2019/01/Cozy-Winter-Home-Tour_13.jpg'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseUs;
