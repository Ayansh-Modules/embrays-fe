import React, { useState } from 'react'
import BlogCard from './BlogCard'
import Button from '../../Components/Button'
import ViewAllBlog from './ViewAllBlog'
function BlogPage() {
  const [viewAll , setviewAll] = useState(false)
  return (
    <div className='h-auto  w-full    '>
        <p className='px-20 py-5 '>
            <p className='text-3xl font-semibold text-Layoutblue'>Latest Blog</p>
            <p className='text-sm pt-5'>The latest industry news , interviews , tecnologies and resources</p>
        </p>

        <div className=''>

        {!viewAll && <div className='flex items-center justify-evenly mb-10'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>}
       {viewAll && <div className='flex items-center justify-evenly mb-20 mt-10'><ViewAllBlog /></div>}
        </div>

     {  !viewAll && <div className='flex justify-end mx-6 mb-5'>
            <Button text={"VIEW ALL POSTS"} onClick={()=>{return setviewAll(true) }}/>
            </div>}
       
    </div>
  )
}

export default BlogPage