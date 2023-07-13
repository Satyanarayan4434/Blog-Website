import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

function Blog() {
  const { posts, loading } = useContext(AppContext);
  console.log(posts);
  return (
    <div className="w-[650px] mx-auto flex flex-col gap-9 mt-28 mb-28">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post}/>
        ))
      )}
    </div>
  );
}

export default Blog;
