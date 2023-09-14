

import React from 'react'
import profile from '../../public/images/profile.png'

const Header = () => {
    return (
        <div className='  w-9/12 mx-auto py-5 px-3 border-b flex justify-between items-center'>
            <h1 className=' text-2xl md:text-3xl lg:text-3xl font-semibold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    )
}

export default Header