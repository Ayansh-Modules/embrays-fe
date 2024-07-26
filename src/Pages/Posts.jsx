import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useBlogContext } from "../Context/BlogContext";
import BlogCard from "./Blogs/BlogCard";
import BlogCardSkeleton from "./Blogs/BlogCardSkeleton";
function Posts() {
  const navigate = useNavigate();
  const { posts, loading } = useBlogContext();
  console.log(!loading);
  console.log(posts.length >= 3);

  return (
    <div
      id="blogs"
      className=" w-full flex-col flex overflow-hidden items-center justify-evenly max-md:justify-start max-md:items-start max-md:flex-col max-sm:flex-col  pt-5   max-md:px-5"
    >
      <p className="w-[95vw] flex-col flex justify-start px-10 mt-5  max-md:text-center max-md:w-full max-md:px-5">
        <p className="text-3xl font-bold text-Layoutblue  text-center">Latest Blog</p>
        <p className="font-semibold py-5 max-md:py-0 max-md:pt-2 text-center">
          The latest industry news , interviews , tecnologies and resources
        </p>
      </p>

      <div className=" flex-col flex items-center  justify-evenly max-md:w-full">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease"
          className="flex items-center my-10 max-md:flex-col  max-md:justify-evenly "
        >
          {!loading && posts[0] ? (
            <>
              <span className="ml-14 max-md:ml-0">
                <BlogCard data={posts[0][0]} />
              </span>
              <span className="mx-14 max-md:mt-8">
                <BlogCard data={posts[0][1]} />
              </span>
              <span className="mr-14 max-md:mr-0 max-lg:hidden  max-md:mt-8 ">
                <BlogCard data={posts[0][3]} />
              </span>
            </>
          ) : (
            <>
              <span className="ml-14 max-md:ml-0">
                <BlogCardSkeleton />
              </span>
              <span className="mx-14 max-md:mt-8">
                <BlogCardSkeleton />
              </span>
              <span className="mr-14 max-md:mr-0 max-md:mt-8">
                <BlogCardSkeleton />
              </span>
            </>
          )}
        </div>

        <div className="flex justify-end w-[95vw] pb-5 ">
          <a href="#">
            <Button
              text={"ALL POSTS"}
              onClick={() => {
                navigate("/allblog");
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Posts;
