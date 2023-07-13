import './App.css';
import {AppContext} from './context/AppContext';
import {useContext,useEffect} from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import Category from './Pages/Category';
import Tag from './Pages/Tag';
import MainHeader from './Pages/MainHeader';

function App() {
  const {fetchData} = useContext(AppContext);
  const [serchParams, setSerchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = serchParams.get("page")??1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split('/').at(-1).replace("-"," ");
      fetchData(Number(page), tag)
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split('/').at(-1).replace("-"," ");
      fetchData(Number(page), null, category)
    }
    else{
      fetchData(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    <Routes>
      <Route to='/' element={<MainHeader/>} />
        <Route index element={<Home/>}/>
        <Route path="/blog/:blogId" element={<BlogPage/>}/>
        <Route path="/categories/:category" element={<Category/>}/>
        <Route path="/tags/:tag"  element={<Tag/>}/>
      <Route/>
    </Routes>
  );
}

export default App;
