import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

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
        posts.map((post) => {
          return <div key={post.id}> 
            <div className="flex flex-col gap-2">
            <h3 className="font-mono text-xl font-bold">{post.title}</h3>
            <p>- By <span className="font-thin text-sm">{post.author}</span></p>
            <p className="font-bold text-sm">- Date: <span className="font-sans text-sm text-violet-700 font-medium">{post.date}</span></p>
            <p className="font-extrabold text-xl text-amber-950">{post.category}</p>
            <p className="font-mono">{post.content}</p>
            <p className="text-blue-800 font-semibold">{post.tags.map((tag)=>{
              return `#${tag},`
            })}</p>
            </div>
          </div>;
        })
      )}
    </div>
  );
}

export default Blog;
