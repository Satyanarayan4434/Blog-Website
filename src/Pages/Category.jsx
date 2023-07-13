import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

export default function Category() {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>navigation(-1)}>Back</button>
        <h2>Blogs On <span>{category}</span></h2>
      </div>
      <Blog/>
      <Pagination/>
    </div>
  )
}
