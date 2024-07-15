import React from "react";
import { useBlogContext } from "../../Context/BlogContext";
import BlogCard from "./BlogCard";
function ViewAllBlog() {
  const { posts } = useBlogContext();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-14  items-center justify-center m-20">
      {posts.map((data) => {return (<BlogCard  data = {data}/>)})}  
    </div>
  );
}

export default ViewAllBlog;
