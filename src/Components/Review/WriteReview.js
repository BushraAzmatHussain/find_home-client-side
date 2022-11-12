import React from 'react';

const WriteReview = () => {
    return (
        <div className=' pl-12 mb-6 pt-6'>
           <h2 className='text-4xl'>Please Write Down Your Viewpoint</h2>
           <textarea className="textarea textarea-success mt-6 w-full h-48 text-2xl" placeholder="Review"></textarea>
           <div className='pt-4 pl-2'>
           <button className='btn btn-success hover:bg-gray-900 hover:text-white'>Submit</button>
           </div>
            
        </div>
    );
};

export default WriteReview;