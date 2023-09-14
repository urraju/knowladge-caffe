

import React from 'react'
import Books from './Books'
import CloseBtn from '../closeBtn'

const BookMarks = ({bookM, count, ClosButton}) => {
    return (
        <div className='bg-teal-50 border w-full  p-10 md:w-5/12 lg:w-5/12 h-max  rounded-lg'>

            <p className=' text-lg md:text-xllg:text-xl text-center mb-4 text-purple-500 p-3 rounded-lg border border-purple-500 font-semibold'>Spent time on read :  <span className='text-green-500'>{count}</span> min</p>

             <h1 className='text-2xl font-semibold'>Bookmarked Blogs : {bookM.length} </h1>
             <p>
               
             </p>
             <p>
                { 
                    bookM.map(book => <Books key={bookM.id} ClosButton={ClosButton} books={book}/>)
                }
             </p>
        </div>
    )
}

export default BookMarks