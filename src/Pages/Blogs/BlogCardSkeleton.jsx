import React from 'react'
import Skeleton from 'react-loading-skeleton'
function BlogCardSkeleton() {
  return (
    <div
      className=" w-[25vw] border-black rounded-2xl shadow "
      style={{ boxShadow: " 20px 20px 60px #acacac, -20px -20px 60px #ffffff" }}
    >
      <div className='image h-[150px]  w-full'>
      <Skeleton  height={20} width={20}/>
      </div>
      <div className="h-[60px] w-full backdrop-blur-3xl  bg-BlogCard opacity-90 z-1 mt-[-60px]  flex justify-start items-center">
      <Skeleton height={20} width={20} circle/>
      <div className='flex-col'>
      <Skeleton count={2}/>
      </div>
      </div>
      <div className="px-5 py-2  h-[180px] flex-col flex justify-between">
      <Skeleton  count={4}/>
      </div>
    </div>
  )
}

export default BlogCardSkeleton