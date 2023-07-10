import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, totalPage, handleChange } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 w-full border-t-2">
      <div className="flex justify-between px-10 py-2 items-center bg-white">
      <div className="flex gap-8">
        {page>1 && <button className="border  p-1 rounded-md bg-slate-500 text-lg text-white" onClick={()=>handleChange(page-1)}>Previous Page</button>}
        {page<totalPage&&<button className="border p-1 rounded-md bg-slate-500 text-lg text-white" onClick={()=>handleChange(page+1)}>Next Page</button>}
      </div>
      <div className="font-mono font-semibold">Page <span className="font-mono text-lg font-bold text-blue-800">{page}</span> Total Page <span className="font-mono text-lg font-bold text-blue-800">{totalPage}</span></div>
    </div>
    </div>
  );
}

export default Pagination;
