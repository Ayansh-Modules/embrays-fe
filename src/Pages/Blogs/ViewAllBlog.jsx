import React from "react";
import { useBlogContext } from "../../Context/BlogContext";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";
import Pagination from "./Pagination";
function ViewAllBlog() {
  const { posts, count, loading } = useBlogContext();

  return (
    <>
      <p className=" flex-col flex justify-start px-20 mt-5 max-md:w-full  max-md:items-center max-md:justify-center">
        <p className="text-3xl font-bold text-Layoutblue max-md:w-[90vw]  text-start">Latest Blog</p>
        <p className="text-xl pt-5 max-md:w-[90vw] text-start ">
          The latest industry news , interviews , tecnologies and resources
        </p>
      </p>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease"
        className="grid grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 gap-14  items-center justify-center mx-20 mt-10 mb-20 max-md:mx-[10vw]"
      >
        {!loading && posts.length > 0 ? (
          <>
            {" "}
            {posts[count].map((data, index) => {
              return <BlogCard data={data} key={index} />;
            })}
          </>
        ) : (
          <>
            {" "}
            {[1, , 2, 3, 4, 5, 6,7,8,9,10,11,12].map((data, index) => {
              return <BlogCardSkeleton key={index} />;
            })}
          </>
        )}
      </div>

      <div className="my-10">
        <Pagination />
      </div>
    </>
  );
}

export default ViewAllBlog;
