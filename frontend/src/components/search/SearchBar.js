import React from 'react';
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className='w-full flex justify-center items-center mt-5'>
      <input placeholder="Search.." 
      className="p-4 px-6 rounded-full text-xl mr-4 w-[40%] outline-none font-semibold"/>
      <button className="bg-purple-200 text-white font-bold text-lg p-4 rounded-full navani">
        <IoSearch className='text-3xl'/>
      </button>
    </div>
  );
}

export default SearchBar;
