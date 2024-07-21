import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
function BlogCard({ data }) {
  const coverImage = data.coverImage;
  const userPhoto = data.userPhoto;
  const userName = data.userName;
  const postDate = data.postDate;
  const postTitle = data.postTitle;
  const postBrief = data.postBrief;
  const postUrl = data.postUrl;

  return (
    <div
      className=" w-[27rem] border-black rounded-2xl shadow hover:translate-y-1 "
      style={{ boxShadow: " 20px 20px 60px #acacac, -20px -20px 60px #ffffff" }}
    >
      <a>
        <img
          class="rounded-t-2xl  z-[-1px] h-[200px]  w-full bg-cover "
          src={coverImage}
          alt="Post Image"
        />
      </a>
      <div className="h-[60px] w-full backdrop-blur-3xl  bg-BlogCard opacity-90 z-1 mt-[-60px] text-white text-sm font-semibold  flex justify-start items-center">
        <div
          className="h-10 w-10 ml-5 rounded-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${userPhoto})` }}
        ></div>
        <p className="px-5">
          {userName}
          <p>{postDate}</p>
        </p>
      </div>
      <div class="px-5 py-2 hover:bg-violet-100 hover:rounded-b-2xl h-[190px] flex-col flex justify-between">
        <a>
          <h5 class="text-sm font-bold tracking-tight text-gray-900 ">
            {postTitle}
          </h5>
        </a>
        <p class=" font-normal text-xs text-gray-400 text-justify">
          {postBrief}
        </p>
        <a
          href={postUrl}
          target="_blank"
          className="inline-flex items-center  text-sm font-semibold text-center text-Layoutblue py-2 "
        >
          Read Post
          <MdOutlineArrowOutward size={15} stroke="60px" className="mx-1" />
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
