import React from 'react';
import './Categories.css';
const Categories = () => {
	return (
		<div className='container mx-auto m-8 sm:px-0'>
			<h1 className='text-center padding-categories  font-bold  drop-shadow-2xl rainbow-text'>
				Our Special Categories
			</h1>
			<div className='flex flex-wrap'>
				<div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 pl-4 pr-4'>
					<div className='w-full h-full  shadow-lg  text-center p-2 border-2 hover:bg-gray-300 design-box'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-12 m-4 rent'
						>
							<path
								fillRule='evenodd'
								d='M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z'
								clipRule='evenodd'
							/>
						</svg>

						<h3 className='text-center p-4 text-2xl font-bold text-orange-700 drop-shadow-2xl hover:text-cyan-700 '>
							Find Apartment
						</h3>
						<p className='text-center text-xl p-4 font-bold text-cyan-700 drop-shadow-2xl hover:text-orange-700 '>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus eveniet eum earum reprehenderit
						</p>
					</div>
				</div>

				<div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 pl-4 pr-4'>
					<div className='w-full h-full bg-grey shadow-lg  text-center p-2 border-2 hover:bg-gray-300 design-box'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-12 m-4 rent'
						>
							<path d='M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z' />
							<path
								fillRule='evenodd'
								d='M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z'
								clipRule='evenodd'
							/>
						</svg>

						<h3 className='text-center p-4 text-2xl font-bold text-orange-700 drop-shadow-2xl hover:text-cyan-700 '>
							Rent A Home
						</h3>
						<p className='text-center text-xl p-4 font-bold text-cyan-700 drop-shadow-2xl hover:text-orange-700 '>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus eveniet eum earum reprehenderit
						</p>
					</div>
				</div>

				<div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 pl-4 pr-4'>
					<div className='w-full h-full bg-grey shadow-lg  text-center p-2 border-2 hover:bg-gray-300 design-box'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-12 m-4 rent'
						>
							<path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
							<path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
						</svg>

						<h3 className='text-center p-4 text-2xl font-bold text-orange-700 drop-shadow-2xl hover:text-cyan-700 '>
							Sell A Home
						</h3>
						<p className='text-center text-xl p-4 font-bold text-cyan-700 drop-shadow-2xl hover:text-orange-700 '>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus eveniet eum earum reprehenderit
						</p>
					</div>
				</div>
			</div>
		</div>

		// extra
	);
};

export default Categories;
