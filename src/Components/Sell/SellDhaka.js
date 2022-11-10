import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SellDhaka = () => {
    return (
        <div>
            <div className='p-6'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="House"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Semi Furnished Apertment</h2>
    <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
    <p className='inline-flex text-lg' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Savar, Dhaka</p>
    <p className='flex px-2 pb-5 p-1 text-lg text-yellow-400'>
                    <AiFillStar></AiFillStar> 
                    <AiFillStar ></AiFillStar> 
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiOutlineStar></AiOutlineStar>
                </p>
                <div className="card-actions justify-start">
                    <Link to='/' className="btn btn-success font-bold  hover:bg-slate-900 hover:text-white">See Details</Link>
                </div>
  </div>
</div>
        </div>

        <div className='p-6'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="House"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Semi Furnished Apertment</h2>
    <p className='font-bold text-emerald-400 text-lg pb-1 pt-1'>12,000 BDT/<small className='text-gray-400'>Month</small></p>
    <p className='inline-flex text-lg' > <MdOutlineLocationOn className='text-2xl text-blue-300 font-bold'></MdOutlineLocationOn> Savar, Dhaka</p>
    <p className='flex px-2 pb-5 p-1 text-lg text-yellow-400'>
                    <AiFillStar></AiFillStar> 
                    <AiFillStar ></AiFillStar> 
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiOutlineStar></AiOutlineStar>
                </p>
                <div className="card-actions justify-start">
                    <Link to='/' className="btn btn-success font-bold  hover:bg-slate-900 hover:text-white">See Details</Link>
                </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SellDhaka;