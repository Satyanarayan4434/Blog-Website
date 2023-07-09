import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blog() {
  const { posts, loading } = useContext(AppContext);
  console.log(posts);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map((post) => {
          return <div key={post.id}> 
            <h3>{post.tittle}</h3>
            <p>By<span>{post.author}</span></p>
            <p>Date:<span>{post.date}</span></p>
            <p>{post.category}</p>
          </div>;
        })
      )}
    </div>
  );
}

export default Blog;
