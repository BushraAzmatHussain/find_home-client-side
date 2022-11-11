import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Rent = () => {
    return (
        <div className='text-center mx-10'>
            <h1 className='font-extrabold font-mono text-4xl my-10'>RENT </h1>
            
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 ml-9'>
                
                <div className="card mb-8  w-72 h-44 shadow-xl hero opacity-90 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" style={{
                    backgroundImage: `url("https://i.ibb.co/syj8rBK/ahnaf-tahsin-rafi-1-S-ci-O-0d0-unsplash.jpg")` }}>
                    <div className="card-body ">
                        <h1 className='text-5xl font-bold text-center my-3 text-white '>Dhaka</h1>
                        <Link to="/rentDhaka" className='text-5xl  text-white hover:text-amber-400 mx-20 mb-20' >< BsArrowRightCircle></BsArrowRightCircle></Link>
                    </div>
                </div>
                
                <div className="card w-72 h-44 shadow-xl  opacity-90 hero  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" style={{
                        backgroundImage: `url("https://i.ibb.co/VvrNrkp/tahsin-islam-gc8-IPK97-h-E-unsplash.jpg")` }}>
                    <div className="card-body p-6">
                        <h1 className='text-4xl font-bold text-center my-3 text-white '>Chittagong</h1>
                        <Link to="/" className=' text-5xl  text-white hover:text-amber-400  mx-20 mb-20' >< BsArrowRightCircle></BsArrowRightCircle></Link>
                    </div>
                </div>
                
                <div className="card w-72 h-44 shadow-xl opacity-90 hero transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" style={{
                        backgroundImage: `url("https://i.ibb.co/GVF3kG6/faisal-photography-8-Q5-HBZs-Jcl-Y-unsplash.jpg")` }}>
                    <div className="card-body">
                        <h1 className='text-5xl font-bold text-center my-3 text-white '>Barishal</h1>
                        <Link to="/" className='text-5xl   text-white hover:text-amber-400  mx-20 mb-20' >< BsArrowRightCircle></BsArrowRightCircle></Link>
                    </div>
                </div>
                
                <div className="card w-72 h-44 shadow-xl  opacity-90 hero transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" style={{
                        backgroundImage: `url("https://i.ibb.co/smyhpL8/dipto-bhowmick-vh-RPFT9-Xqr-Y-unsplash.jpg")` }}>
                    <div className="card-body">
                        <h1 className='text-5xl font-bold text-center my-3 text-white '>Khulna</h1>
                        <Link to="/" className='text-5xl text-white hover:text-amber-400  mx-20 mb-20' >< BsArrowRightCircle></BsArrowRightCircle></Link>
                    </div>
                </div>
                
            
           
           
           
            <div className="card w-72 h-44 shadow-xl hero  opacity-90 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" style={{
                    backgroundImage: `url("https://i.ibb.co/Vvd2rXy/imran-molla-k-Dk2-ZHQP3-U0-unsplash.jpg")` }}>
                    <div className="card-body">
                        <h1 className='text-5xl font-bold text-center my-3 text-white '> Rajshahi</h1>
                        <Link to="/" className='text-5xl  text-white hover:text-amber-400  mx-20 mb-20' >< BsArrowRightCircle></BsArrowRightCircle></Link>
                    </div>
                </div>
            <div className="card w-72 h-44 shadow-xl  opacity-90 hero transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" style={{
                    backgroundImage: `url("https://i.ibb.co/CskDM3p/rejaul-karim-j-I45-R7-Tgsx4-unsplash.jpg")` }}>
                    <div className="card-body">
                        <h1 className='text-5xl font-bold text-center my-3 text-white '>Rangpur</h1>
                        <Link to="/" className='text-5xl  text-white hover:text-amber-400  mx-20 mb-20' >< BsArrowRightCircle></BsArrowRightCircle></Link>
                    </div>
                </div>
            <div className="card w-72 h-44 shadow-xl  opacity-90 hero transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" style={{
                    backgroundImage: `url("https://i.ibb.co/h10WyZy/johirul-islam-sujon-Tmyj5c1u-Le0-unsplash.jpg")` }}>
                    <div className="card-body">
                        <h1 className='text-4xl font-bold text-center my-3 text-white '>Mymensingh</h1>
                        <Link to="/" className='text-5xl  text-white hover:text-amber-400  mx-20 mb-20' >< BsArrowRightCircle></BsArrowRightCircle></Link>
                    </div>
                </div>
            <div className="card w-72 h-44 shadow-xl  opacity-90 hero transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" style={{
                    backgroundImage: `url(" https://i.ibb.co/M9stD9x/onup-roy-RSIBHe-Dj-Ke-Q-unsplash.jpg")` }}>
                    <div className="card-body">
                        <h1 className='text-5xl font-bold text-center my-3 text-white '>Sylhet</h1>
                        <Link to="/" className='text-5xl  text-white hover:text-amber-400  mx-20 mb-20' >< BsArrowRightCircle></BsArrowRightCircle></Link>
                    </div>
              
              </div>   
                
            </div>
               
        </div>
            
          
    );
};

export default Rent;



