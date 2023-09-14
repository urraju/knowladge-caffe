
 

 import React from 'react'
 
 const CloseBtn = ({ClosButton,bookId}) => {
    
    return (
        <div>
        <button onClick={() => ClosButton(bookId)} class="btn btn-circle flex justify-end items-end">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 p-1 text-sm text-white bg-rose-600 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button> 
        </div>
    )
 }
 
 export default CloseBtn