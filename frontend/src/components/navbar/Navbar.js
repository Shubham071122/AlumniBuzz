import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="w-full flex py-5 p-10 items-center justify-between bg-white sticky top-0 z-20">
      <h3 className="text-2xl font-bold text-purple-800">Alumni Buzz</h3>
      <div className='flex gap-10'>
        <NavLink to="/login" className="font-semibold px-4 py-2 rounded-full navani">
          Log In
        </NavLink>
        <NavLink to="/create" className="font-semibold navani px-4 py-2 rounded-full">
          Create New
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
