

import React from 'react'
import CloseBtn from '../closeBtn';

const Books = ({books,ClosButton}) => {
    console.log(books);
    const {details} = books;
    return (
        <div className=' bg-gray-200 shadow-lg p-3 mt-3 rounded-lg border-l-4 border-teal-500'>
             <div className='flex items-end'>
             <h1 className=' text-lg text-gray-600'>{details}</h1>
                <CloseBtn bookId={books.id} ClosButton={ClosButton}/>
             </div>
        </div>
    )
}

export default Books