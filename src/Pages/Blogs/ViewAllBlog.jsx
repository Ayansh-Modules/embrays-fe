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
        <p className="text-3xl font-bold text-Layoutblue max-md:w-[90vw] max-md:text-center">Latest Blog</p>
        <p className="text-base pt-5 max-md:w-[100vw] max-md:text-center">
          The latest industry news , interviews , tecnologies and resources
        </p>
      </p>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease"
        className="grid grid-cols-1 md:grid-cols-3 gap-14  items-center justify-center mx-20 mt-10 mb-20 max-md:mx-[10vw]"
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
