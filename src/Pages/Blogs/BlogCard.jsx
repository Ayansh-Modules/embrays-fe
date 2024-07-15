import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
function BlogCard({data}) {
console.log (data)
 const coverImage=data.coverImage
//  const user=data.user
 const userName=data.userName
 const postDate=data.postDate
 const postTitle=data.postTitle
 const postBrief=data.postBrief
 const postUrl=data.postUrl


  return (
  
      <div class="w-[27vw] bg-white border border-black rounded-2xl shadow " >
        <a >
          <img
            class="rounded-t-2xl  z-[-1px] h-[200px]  w-full "
            src= {coverImage}
            alt="Post Image"
          />
        </a>
        <div className="h-[60px] w-full backdrop-blur-3xl  bg-BlogCard opacity-90 z-1 mt-[-60px] text-white text-sm font-semibold flex-col flex justify-center ">
          <p className="px-5">
            {userName}
            <p>{postDate}</p>
          </p>
        </div>
        <div class="px-5 py-2 hover:bg-violet-100 hover:rounded-b-2xl">
          <a >
            <h5 class="text-sm font-bold tracking-tight text-gray-900 ">
              {postTitle}
            </h5>
          </a>
          <p class="mb-3 font-normal text-sm text-gray-400 text-justify">
            {postBrief}
          </p>
          <a
            href={postUrl}
            class="inline-flex items-center  py-2 text-sm font-semibold text-center text-Layoutblue  "
          >
            Read Post
            <MdOutlineArrowOutward size={15} stroke="60px" className="mx-1"/>
          </a>
        </div>
      </div>
   
  );
}

export default BlogCard;
