import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { FaBath } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SellDhaka = () => {
    return (
        <div>
            <h1 className='text-center mx-10 font-bold font-mono text-4xl mt-10'>Explore Dhaka </h1> 
        <hr className='w-20 mb-20'></hr>
            <div className='grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-8 p-8'>
            <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/200/280/arch" alt="House"/></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Semi Furnished Apartment</h2>
                        <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                        <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Savar, Dhaka</p>
                        <p className='flex px-2 pb-2 p-1 text-lg text-yellow-400'>
                    <AiFillStar></AiFillStar> 
                    <AiFillStar ></AiFillStar> 
                    <AiFillStar></AiFillStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </p>

                <div className='flex gap-4 pb-4'>
            <div className='flex gap-1'>
                <p><FaBath></FaBath></p>
                <p>2 Bath</p>
            </div>
            <div className='flex gap-1'>
                <p className=''><BiBed></BiBed></p>
                <p>3 Rooms</p>
            </div>
            <div className='flex gap-1'>
                <p><BsArrowsFullscreen></BsArrowsFullscreen></p>
                <p>350 sqft</p>
            </div>
            
            </div>
                        <div className="card-actions justify-start">
                                <Link to='/detail' className="btn btn-success font-sans  hover:bg-slate-900 hover:text-white">See Details</Link>
                        </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/200/280/arch" alt="House"/></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Semi Furnished Apertment</h2>
                        <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                        <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Savar, Dhaka</p>
                        <p className='flex px-2 pb-2 p-1 text-lg text-yellow-400'>
                    <AiFillStar></AiFillStar> 
                    <AiFillStar ></AiFillStar> 
                    <AiFillStar></AiFillStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </p>

                <div className='flex gap-4 pb-4'>
            <div className='flex gap-1'>
                <p><FaBath></FaBath></p>
                <p>2 Bath</p>
            </div>
            <div className='flex gap-1'>
                <p className=''><BiBed></BiBed></p>
                <p>3 Rooms</p>
            </div>
            <div className='flex gap-1'>
                <p><BsArrowsFullscreen></BsArrowsFullscreen></p>
                <p>350 sqft</p>
            </div>
            
            </div>
                        <div className="card-actions justify-start">
                                <Link to='/' className="btn btn-success font-sans  hover:bg-slate-900 hover:text-white">See Details</Link>
                        </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/200/280/arch" alt="House"/></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Semi Furnished Apertment</h2>
                        <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                        <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Savar, Dhaka</p>
                        <p className='flex px-2 pb-2 p-1 text-lg text-yellow-400'>
                    <AiFillStar></AiFillStar> 
                    <AiFillStar ></AiFillStar> 
                    <AiFillStar></AiFillStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </p>

                <div className='flex gap-4 pb-4'>
            <div className='flex gap-1'>
                <p><FaBath></FaBath></p>
                <p>2 Bath</p>
            </div>
            <div className='flex gap-1'>
                <p className=''><BiBed></BiBed></p>
                <p>3 Rooms</p>
            </div>
            <div className='flex gap-1'>
                <p><BsArrowsFullscreen></BsArrowsFullscreen></p>
                <p>350 sqft</p>
            </div>
            
            </div>
                        <div className="card-actions justify-start">
                                <Link to='/' className="btn btn-success font-sans  hover:bg-slate-900 hover:text-white">See Details</Link>
                        </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/200/280/arch" alt="House"/></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Semi Furnished Apertment</h2>
                        <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                        <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Savar, Dhaka</p>
                        <p className='flex px-2 pb-2 p-1 text-lg text-yellow-400'>
                    <AiFillStar></AiFillStar> 
                    <AiFillStar ></AiFillStar> 
                    <AiFillStar></AiFillStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </p>

                <div className='flex gap-4 pb-4'>
            <div className='flex gap-1'>
                <p><FaBath></FaBath></p>
                <p>2 Bath</p>
            </div>
            <div className='flex gap-1'>
                <p className=''><BiBed></BiBed></p>
                <p>3 Rooms</p>
            </div>
            <div className='flex gap-1'>
                <p><BsArrowsFullscreen></BsArrowsFullscreen></p>
                <p>350 sqft</p>
            </div>
            
            </div>
                        <div className="card-actions justify-start">
                                <Link to='/' className="btn btn-success font-sans  hover:bg-slate-900 hover:text-white">See Details</Link>
                        </div>
                </div>
            </div>

        
        </div>
        </div>
    );
};

export default SellDhaka;