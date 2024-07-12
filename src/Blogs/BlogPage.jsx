import React from 'react'
import BlogCard from './BlogCard'
import Button from '../Components/Button'
function BlogPage() {
  return (
    <div className='h-auto  w-full    '>
        <p className='px-10 py-5  '>
            <p className='text-3xl font-semibold text-Layoutblue'>Latest Blog</p>
            <p className='text-sm pt-5'>The latest industry news , interviews , tecnologies and resources</p>
        </p>

        <div className=''>

        <div className='flex items-center justify-evenly mb-10'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>
        </div>

        <div className='flex justify-end mx-6 mb-5'>
            <Button text={"VIEW ALL POSTS"} />
            </div>
       
    </div>
  )
}

export default BlogPage