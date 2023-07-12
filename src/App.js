import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination'
import {AppContext} from './context/AppContext';
import {useContext,useEffect} from 'react';


function App() {
  const {fetchData} = useContext(AppContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Blog />
      <Pagination/>
    </div>
  );
}

export default App;
