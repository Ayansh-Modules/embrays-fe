import React from "react";
import Button from "../Components/Button";
import BlogCard from "./Blogs/BlogCard";
import {useBlogContext}  from "../Context/BlogContext"
import { useNavigate } from "react-router-dom";
function Posts() {
  const navigate = useNavigate()
  const { posts, loading } = useBlogContext();
  console.log (!loading )
  console.log (posts.length >= 3)

  return (
    <div
      id="blogs"
      className=" w-full flex-col flex overflow-hidden items-center justify-evenly max-md:justify-start max-md:items-start max-md:flex-col max-sm:flex-col  pt-5   max-md:px-5"
    >
      <p className='w-[95vw] flex-col flex justify-start px-10 mt-5'>
            <p className='text-3xl font-bold text-Layoutblue '>Latest Blog</p>
            <p className='text-base py-5'>The latest industry news , interviews , tecnologies and resources</p>
        </p>
     
      <div
        className=" flex-col flex items-center  justify-evenly"
       
      >
       {!loading && posts[0] ?(<div 
       
       data-aos="zoom-in"
       data-aos-duration="1000"
       data-aos-easing="ease"

       className="flex items-center my-5  ">
          <span className="ml-14 ">
            <BlogCard data = {posts[0][0]}/>
            
          </span>
          <span className="mx-14">
            <BlogCard data = {posts[0][1]}/>
          </span>
          <span className="mr-14">
            <BlogCard  data = {posts[0][3]}/>
          </span>
        </div>): <p>Loading....</p>}
        

        <div className="flex justify-end w-[95vw] pb-5 ">
         
            <Button text={"ALL POSTS"} onClick={()=>{navigate("/allblog")}} />
        
        </div>
      </div>
    </div>
  );
}

export default Posts;
