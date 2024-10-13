import React from 'react';
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className='w-full flex justify-center items-center mt-5'>
      <input 
        placeholder="Search.." 
        className="p-3 sm:p-4 px-6 rounded-full text-base sm:text-xl mr-3 sm:mr-4 w-[85%] sm:w-[40%] outline-none font-semibold border-4 sm:border-8 border-gray-300"
      />
      <button className="bg-purple-600 text-white font-bold text-lg p-3 sm:p-4 rounded-full shadow-lg navani">
        <IoSearch className='text-2xl sm:text-3xl'/>
      </button>
    </div>
  );
}

export default SearchBar;
