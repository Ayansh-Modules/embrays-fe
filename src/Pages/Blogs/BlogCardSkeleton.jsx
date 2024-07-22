import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function BlogCardSkeleton() {
  return (
    <div
      className=" w-[25vw] max-lg:w-[10vw]  max-md:w-[80vw] border-black rounded-2xl shadow "
      style={{ boxShadow: " 20px 20px 60px #acacac, -20px -20px 60px #ffffff" }}
    >
      <div className='image h-[150px]  w-full'>
      {/* <Skeleton  height={20} width={20} baseColor='#AEB4D0'/> */}
      </div>
      <div className="h-[60px] w-full backdrop-blur-3xl  bg-BlogCard opacity-90 z-1 mt-[-60px]  flex justify-start items-center">
      {/* <Skeleton height={20} width={20} baseColor='#AEB4D0' circle/> */}
      <div className='flex-col'>
      <Skeleton baseColor='#AEB4D0' count={2}/>
      </div>
      </div>
      <div className="px-5 py-2  h-[180px] flex-col flex justify-between">
      <Skeleton baseColor='#AEB4D0' count={4}/>
      </div>
    </div>
  )
}

export default BlogCardSkeleton