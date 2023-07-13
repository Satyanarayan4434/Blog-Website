import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    async function fetchData(page, tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url = `${url}&tag=${tag}`
        }
        if(category){
            url =`${url}&category=${category}`
        }
        try {
            let result = await fetch (url)
            let response = await result.json(); 
            setPosts(response.posts);
            setPage(response.page);
            setTotalPage(response.totalPages)
        } catch (error) {
            setPosts([]);
            setPage(1);
            setTotalPage(null);
        }
        setLoading(false);
    }
    function handleChange(page){
        setPage(page);
        fetchData(page);
    }

    const value = {
        loading,
        posts,
        page,
        totalPage,
        fetchData,
        handleChange,
        setLoading
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

}