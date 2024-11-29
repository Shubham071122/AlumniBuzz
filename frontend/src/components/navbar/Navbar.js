import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/images/logo3.png';
import AuthContext from '../../context/AuthContext';

function Navbar() {
  const {isAuthenticated} = useContext(AuthContext)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth >= 1024);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  // Track scrolling at start
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 350);
    };

    const handleScreenWidth = () => {
      setIsScreenLarge(window.innerWidth >= 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScreenWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScreenWidth);
    };
  }, []);

  // Toggle search input
  const toggleSearch = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    setIsSearchActive((prev) => !prev);
  };

  // Toggle menu
  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu and search bar on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      // if (isSearchActive) {
      //   setIsSearchActive(false);
      // }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen, isSearchActive]);

  return (
    <>
      <div
        className={`w-full ${
          !isSearchActive ? 'flex' : 'block'
        } py-2 sm:py-3 px-5 sm:px-10 items-center justify-between bg-white sticky top-0 z-20 ${
          isScrolled || isSearchActive ? 'shadow-md' : ''
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-start gap-0 sm:gap-5">
          {/* Company name, hidden when search is active */}
          {!isSearchActive && (
            <div className="flex items-center justify-center gap-4">
              <img src={logo} alt='logo' className='w-10 h-10' />
              <h3 className="text-lg sm:text-2xl font-bold text-purple-800 -ml-1">
                CampusBuzz
              </h3>
            </div>
          )}

          {/* Search Bar - Left side  on large screens */}
          {isScreenLarge && isScrolled && (
            <div
              className={`w-full sm:w-auto flex items-center justify-between gap-2 transition-all duration-300`}
              ref={searchRef}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full sm:w-[250px] px-4 py-[5px] border-2 border-purple-400 outline-none rounded-full"
              />
              <button className="text-white font-bold text-lg p-2 rounded-full bg-purple-400 navani">
                <IoSearch className="text-2xl" />
              </button>
            </div>
          )}

          {/* Search Bar - Full width  on small screens */}
          <div
            className={`w-full flex items-center justify-between gap-2 ${
              isSearchActive ? 'flex' : 'hidden'
            } transition-transform duration-300`}
            ref={searchRef}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-[85%] px-4 py-[5px] bg-gray-100 border-[1px] outline-none rounded-full"
              autoFocus
            />
            <button className="text-white font-bold text-lg p-2 rounded-full bg-purple-400 navani">
              <IoSearch className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Hamburger and Search Icons */}
        {!isSearchActive && (
          <div className="flex items-center gap-4 sm:hidden">
            <button className="text-gray-500 text-2xl" onClick={toggleSearch}>
              <IoSearch />
            </button>
            <button
              className="text-purple-700 text-2xl hover:text-purple-800 transition-colors duration-200"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>
        )}

        {/* Links for larger screens */}
        <div className={`hidden sm:flex gap-5`}>
          <NavLink
            to="/login"
            className={`font-semibold px-4 py-2 rounded-full navani ${
              isScrolled ? 'bg-gray-300' : 'bg-transparent'
            } transition-all duration-300 hover:bg-gray-200`}
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className={`font-semibold px-4 py-2 rounded-full navani ${
              isScrolled ? 'bg-gray-300' : 'bg-transparent'
            } transition-all duration-300 hover:bg-gray-200`}
          >
            Create New
          </NavLink>
        </div>
      </div>
      {/* Hamburger Menu - Sliding from the left */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[250px] bg-gray-100 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 shadow-lg `}
      >
        <div className="flex flex-col h-full p-6">
          <button
            className="self-end mb-4 text-2xl text-purple-500 hover:text-purple-800 "
            onClick={toggleMenu}
          >
            &times;
          </button>
          <NavLink
            to="/login"
            className="font-semibold mb-6 text-lg text-purple-800 hover:text-purple-600"
            onClick={toggleMenu}
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className="font-semibold mb-6 text-lg text-purple-800 hover:text-purple-600"
            onClick={toggleMenu}
          >
            Create New
          </NavLink>
          <hr className="mb-6" />
          <NavLink
            to="/"
            className="font-medium mb-4 text-purple-700 hover:text-purple-500"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="font-medium mb-4 text-purple-700 hover:text-purple-500"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/profile"
            className="font-medium mb-4 text-purple-700 hover:text-purple-500"
            onClick={toggleMenu}
          >
            Profile
          </NavLink>
          <NavLink
            to="/contact"
            className="font-medium mb-4 text-purple-700 hover:text-purple-500"
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/help"
            className="font-medium mb-4 text-purple-700 hover:text-purple-500"
            onClick={toggleMenu}
          >
            Help
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
