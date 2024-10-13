import React from 'react';
import { Link } from 'react-router-dom';
import pagenotfound from '../../assets/images/pageNotfound.avif';

function PageNotfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffffff] p-4">
      
      <img 
        src={pagenotfound} 
        alt="Page not found" 
        className="w-full max-w-md h-auto object-cover mb-6" 
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Page Not Found!</h1>

      <Link to="/" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300">
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotfound;
