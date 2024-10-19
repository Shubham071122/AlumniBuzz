import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Logging in with:', { email, password });
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-300 to-violet-400 px-4 sm:px-0">
        <div className="w-full max-w-[90%] sm:max-w-[75%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] bg-purple-100 flex flex-col items-center justify-center py-10 px-6 sm:px-8 md:px-14 gap-4 rounded-xl shadow-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-violet-800 font-bold">CampusBuzz</h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-black font-bold mb-5">Log In</h3>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg text-black font-semibold outline-none rounded-xl border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg text-black font-semibold outline-none rounded-xl border border-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 sm:right-4 top-3 sm:top-4 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible className="text-xl sm:text-2xl" />
              ) : (
                <AiFillEye className="text-xl sm:text-2xl" />
              )}
            </button>
          </div>
          <button
            className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg bg-violet-700 text-white font-semibold rounded-xl hover:bg-violet-800 transition-all duration-75 ease-in-out mt-5 sm:mt-10"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-sm sm:text-base">or</p>
          <button className="w-full flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg bg-gray-300 text-black font-semibold rounded-xl hover:bg-gray-400 transition-all duration-75 ease-in-out">
            <span>
              <FcGoogle className="text-2xl sm:text-4xl" />
            </span>
            <p className="w-full text-center">Log in with Google</p>
          </button>
          <p className="text-gray-400 font-medium text-sm sm:text-base">
            Don't have an account?{' '}
            <Link to="/signup" className="text-black font-medium">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
