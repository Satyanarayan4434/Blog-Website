import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BlogDetails from "../components/BlogDetails";

export default function BlogPage() {
  
  const {loading,setLoading} =useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
  const blogId = location.pathname.split("/").at(-1)

  async function fetchRelatedBlogs(){
    
    setLoading(true);
    let url = `${newBaseUrl}?blogId=${blogId}`;
    try {
      let result = await fetch(url);
      let responce  =await result.json();
      setBlog(responce.blog);
      setRelatedBlogs(responce.relatedBlogs);
    } catch (error) {
      console.log("Error aya hai");
    }
    setLoading(false)
  }
  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs()
    }
  },[location.pathname]);


  return (
    <div>
      <Header />
      <div>
        <button onClick={()=>navigation(-1)}>Back</button>
      </div>
      {
        loading?(<p>Loading</p>):(blog?(
          <div>
            <BlogDetails post={blog}/>
            <h2>Related Blogs</h2>
            {
              relatedblogs.map((post)=>(
                <div key={post.id}>
                  <BlogDetails post={post}/>
                </div>
              ))
            }
          </div>
        ):(
          <div className="mt-16">
            <h2>No Blog Found</h2>
          </div>
        ))
      }
    </div>
  );
}
