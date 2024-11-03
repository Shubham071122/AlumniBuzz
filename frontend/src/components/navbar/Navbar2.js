import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/images/logo3.png';
import { IoSearch } from 'react-icons/io5';

function Navbar2() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Toggle the search input
  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    const handleScroll = () => {
      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Use 'mousedown' for outside click
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isSearchOpen]);

  return (
    <div className="w-full lg:hidden sticky top-0 z-50 py-1 px-4 pr-5 shadow-sm bg-white flex items-center justify-between">
      <div className={`w-10 h-10`}>
        <img src={logo} alt="logo" className="w-10 h-10" />
      </div>
      <div
        ref={searchRef}
        className={`flex items-center transition-width duration-600 ease-in-out ${
          isSearchOpen ? 'w-[90%]' : 'w-auto'
        }`}
      >
        {isSearchOpen ? (
          <div className='w-full flex justify-between'>
            <input
              type="text"
              className="w-full px-4 py-2 ml-6 mr-2 rounded-3xl outline-none transition-all duration-300 bg-gray-100 border-[1px]"
              placeholder="Search..."
              autoFocus
            />
            <button className="text-gray-500 font-bold text-lg hover:text-violet-800 ">
              <IoSearch size={22} className="text-gray-500"/>
            </button>
          </div>
        ) : (
          <button onClick={handleSearchClick}>
            <IoSearch size={22} className="text-gray-500 font-bold" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar2;
