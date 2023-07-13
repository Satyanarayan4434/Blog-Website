import React from 'react';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination'

export default function Home() {
  return (
    <div>
        <Header/>
        <Blog/>
        <Pagination/>
    </div>
  )
}
