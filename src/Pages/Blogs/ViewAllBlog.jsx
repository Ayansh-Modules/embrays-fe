import React from "react";
import { useBlogContext } from "../../Context/BlogContext";
import BlogCard from "./BlogCard";
function ViewAllBlog() {
  const { posts } = useBlogContext();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-14 ">
      {posts.map((data) => {
        return (
      
          <BlogCard
            key = {data.id}
          data = {data}
          />
        );
      })}
    </div>
  );
}

export default ViewAllBlog;
