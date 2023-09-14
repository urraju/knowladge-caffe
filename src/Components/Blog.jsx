

import React, { useEffect, useState  } from 'react'
import Blogs from '../mianBlogs/Blogs'

const Blog = ({bookMarkHandler, countTime}) => {

    const [blog, setBlog] = useState([])
 
    useEffect(data => {
      fetch('blog.json')
      .then(res => res.json())
      .then(data =>  setBlog(data))
    }, [])

    return (
        <div>
            {
                blog.slice(0,3).map((blog, index) =>
                     <Blogs

                      key={index} 
                      blog={blog}
                      bookMarkHandler={bookMarkHandler}
                      countTime={countTime}
                />)
            }
        </div>
    )
}

export default Blog