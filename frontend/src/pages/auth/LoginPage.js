import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        
        <div className="w-[35%] bg-purple-100 flex flex-col items-center justify-center py-10 px-14 gap-4 rounded-xl shadow-md">
        <h2 className='text-3xl text-violet-800 font-bold'>Almuni Buzz</h2>
        <h3 className='text-3xl text-black font-bold mb-5'>Log In</h3>
          <input
            placeholder="Email address"
            className="w-full px-4 py-4 text-lg text-black font-semibold outline-none rounded-xl"
          />
          <input
            placeholder="Password"
            className="w-full px-4 py-4 text-lg text-black font-semibold outline-none rounded-xl"
          />
          <button className="w-full px-4 py-4 text-lg bg-violet-700 text-white font-semibold rounded-xl hover:bg-violet-800 transition-all duration-75 ease-in-out mt-10">
            Login
          </button>
          <p>or</p>
          <button  className="w-full flex items-center px-6 py-3 text-lg bg-gray-200 text-black font-semibold rounded-xl hover:bg-gray-300 transition-all duration-75 ease-in-out">
            <span><FcGoogle className="text-4xl" /></span>
            <p className='w-full text-center'> Log in with Google</p>
          </button>
          <p className='text-gray-400 font-medium'>
            Don't have an account? <Link className='text-black font-medium'>Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
