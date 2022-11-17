import React from 'react';
import { BiBed, BiRightArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';
import { BsArrowsFullscreen, BsHouse } from 'react-icons/bs';
import { FaBath } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import WriteReview from '../Review/WriteReview';

const Detail = () => {
    return (
        
            <div className='p-10'>
            <h1 className='text-5xl pl-12' >Mordern Furnished Apertment</h1>
            <div className="carousel 2xl:w-1/2 lg:w-1/2 md:w-full sm:w-full  h-96 ml-12 mt-12 mb-16">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8Bz6wbL/vinicius-amnx-amano-17-NCG-w-Ok-MY-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-2xl font-bold text-black "><BiLeftArrow></BiLeftArrow></a> 
                        <a href="#slide2" className="text-2xl font-bold text-black"><BiRightArrow></BiRightArrow></a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/p3FwP8p/kam-idris-Hq-HX3-LBN18-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-2xl font-bold text-black"><BiLeftArrow></BiLeftArrow></a> 
                        <a href="#slide3" className="text-2xl font-bold text-black"><BiRightArrow></BiRightArrow></a>
                </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/2dQmFkt/naomi-hebert-2dc-Yhvb-HV-M-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="text-2xl font-bold text-black"><BiLeftArrow></BiLeftArrow></a> 
                <a href="#slide4" className="text-2xl font-bold text-black"><BiRightArrow></BiRightArrow></a>
                </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3vRKvWP/mahrous-houses-Jy-LVK0-RJVYc-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="text-2xl font-bold text-black"><BiLeftArrow></BiLeftArrow></a> 
                    <a href="#slide1" className="text-2xl font-bold text-black"><BiRightArrow></BiRightArrow></a>
                    </div>
                </div>
            </div>

            <div>
            <h2 className='text-4xl pl-12 '>Description</h2>

            <div className='2xl:flex'>
            <div className='flex gap-2 pl-12 pt-6'>
                <p><FaBath></FaBath></p>
                <p>2 Bath</p>
            </div>
            <div className='flex gap-2 pl-12 pt-6'>
                <p className='text-xl'><BiBed></BiBed></p>
                <p>3 Rooms</p>
            </div>
            <div className='flex gap-2 pl-12 pt-6'>
                <p><BsArrowsFullscreen></BsArrowsFullscreen></p>
                <p>350 sqft</p>
            </div>
            <div className='flex gap-2 pl-12 pt-6'>
                <p className='text-xl'><BsHouse></BsHouse></p>
                <p>Apartment</p>
            </div>
            </div>

            <p className='pl-12 pt-4 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ipsa natus, reiciendis rerum voluptas dolor voluptatibus doloribus. Voluptatibus, molestias! Iure dolorem ea, delectus non eligendi doloremque adipisci fugit vero, ad quos asperiores quaerat culpa voluptatibus. Assumenda fugit adipisci corporis in fuga maiores blanditiis, quisquam exercitationem? Optio similique voluptate officiis cumque non sit, temporibus eaque repudiandae quis quo hic ut dolor dolorem aspernatur deleniti! Velit ipsa cum error corporis assumenda itaque dolorum nam exercitationem consectetur numquam sed nobis dolor sapiente sunt nesciunt eligendi, sit qui, placeat consequatur totam ad a. Quaerat doloribus molestiae adipisci, cum delectus harum laborum dolorum id facere ea commodi. Excepturi magnam ipsum fuga, odio eveniet vel soluta, sapiente quia dignissimos maxime nam officia aut molestias iure in, similique dolor iste aspernatur. Vero in dicta provident, harum veniam atque earum quo expedita quis inventore illo, voluptates quas! Aspernatur quisquam maxime neque, harum dolorem earum officia sed molestias quae eveniet ut sequi? Repellendus dicta minus cupiditate commodi deleniti asperiores dolore assumenda ratione quidem quibusdam, blanditiis mollitia esse odit labore fugit perspiciatis itaque tempore quasi! Error, porro? Nisi corrupti, voluptatum rerum eaque optio dolorum exercitationem pariatur dicta itaque reprehenderit beatae illo. </p>
            <hr className='w-full'></hr>

            <h2 className='text-4xl pl-12 mb-6 '>Apartment Amenities</h2>
            <div className=' pl-12 grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> Garbage Disposal</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> Yard</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> Garage</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> Air Conditioning</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> Parking</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p>Microwave</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p>No Dogs</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> Bathrooms</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> Gas Supply</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> Water Supply</p>
                </div>
                <div className='flex pb-3 text-xl'> 
                <p><GiCheckMark></GiCheckMark></p>
                <p> No Cats</p>
                </div>
                
            </div>
            <hr className='w-full'></hr>

            <h2 className='text-2xl pl-12 mb-6 '><span className='font-bold'>Address Details:</span> Motijhil Colony, Motijhil, Dhaka </h2>
            <h2 className='text-2xl pl-12 mb-6 '><span className='font-bold'>Rent:</span> 12,000 BDT/ <small>Month</small></h2>
            <h2 className='text-2xl pl-12 mb-6 '><span className='font-bold'>Booking Price:</span> 12,000 BDT</h2>

            <div className=' pl-12 mb-6 '>
            <Link to='/' className='btn btn-success hover:text-white hover:bg-gray-900 '>Book Now</Link>
            </div>
        </div>
        <hr className='w-full pb-4'></hr>
        <WriteReview></WriteReview>
        <Review></Review>
        
    </div>

    
    );
};

export default Detail;