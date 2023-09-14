

import React from 'react'
import { FaRegBookmark } from "react-icons/fa";

const Blogs = ({blog, bookMarkHandler, countTime}) => {
    
    const { id, details, cover, author, author_img, posted_date, reading_time ,hastag} = blog;
    return (
        <div>
            <img className='rounded-lg' src={cover} alt={`cover picture of the title ${details}`} />
            {/* author reading time posted time part  */}
            <div className='py-5'>
           
            <div className=' mt-6 flex justify-between'>
                 <div className='flex items-center gap-3'>
                 <img className='h-16 w-16 rounded-full' src={author_img} alt="" />
                 <div>
                 <h1 className='text-xl font-semibold'>{author}</h1>
                 <h1 className='font-light text-sm text-gray-500'>{posted_date}</h1>
                 </div>
                 </div>

                <div className='flex gap-2 items-center'>
                <p className='text-gray-500'>{reading_time} min red</p>
                 <button onClick={() => bookMarkHandler(blog)} className='text-teal-600 text-lg'> <FaRegBookmark/> </button>
                </div>

            </div>
            <h1 className='text-2xl md:w-[430px] lg:w-[450px] leading-normal font-semibold mt-4'>{details}</h1>
            <p className='mt-4 font-light text-sm text-gray-500'>{hastag}</p>
            </div>
            <button onClick={() => countTime(reading_time)} className='bg-green-600 mb-5 text-sm font-light text-white py-1 px-2 rounded'>Mark As Read</button>
        </div>
    )
}

export default Blogs