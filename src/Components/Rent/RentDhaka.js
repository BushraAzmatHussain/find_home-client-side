import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsArrowsFullscreen, BsHouse } from 'react-icons/bs';
import { FaBath } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';

const RentDhaka = () => {
    return (
        <div className='p-10'>
            <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Houses" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Mordern Furnished Apertment</h2>
                <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Motijhil, Dhaka</p>
    
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
                    <Link to="/detail" className="btn btn-success font-sans hover:bg-slate-900 hover:text-white">See Details</Link>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Houses" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Mordern Furnished Apertment</h2>
                <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Motijhil, Dhaka</p>
    
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
                    <button className="btn btn-success font-sans  hover:bg-slate-900 hover:text-white">See Details</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Houses" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Mordern Furnished Apertment</h2>
                <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Motijhil, Dhaka</p>
    
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
                    <button className="btn btn-success font-sans hover:bg-slate-900 hover:text-white">See Details</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Houses" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Mordern Furnished Apertment</h2>
                <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Motijhil, Dhaka</p>
    
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
                    <button className="btn btn-success font-sans   hover:bg-slate-900 hover:text-white">See Details</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Houses" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Mordern Furnished Apertment</h2>
                <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Motijhil, Dhaka</p>
    
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
                    <button className="btn btn-success  font-sans hover:bg-slate-900 hover:text-white">See Details</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Houses" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Mordern Furnished Apertment</h2>
                <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
                <p className='inline-flex' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Motijhil, Dhaka</p>
    
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
                    <button className="btn btn-success  font-sans hover:bg-slate-900 hover:text-white">See Details</button>
                </div>
            </div>
        </div>
            </div>
            

            
        </div>
    );
};

export default RentDhaka;