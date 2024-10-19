import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('student');
  const [errors, setErrors] = useState({ name: '', password: '', email: '' });

  const validateForm = () => {
    const newErrors = { name: '', password: '', email: '' };
    let isValid = true;

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signing up with:', { name, password, userType });
    } else {
      console.log('Please fill in all required fields');
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-300 to-violet-400 p-4 sm:p-10">
        <div className="w-full max-w-md bg-purple-100 flex flex-col items-center justify-center py-10 px-8 sm:px-14 gap-4 rounded-xl shadow-md">
          <h2 className="text-3xl text-violet-800 font-bold">CampusBuzz</h2>
          <h3 className="text-3xl text-black font-bold mb-5">Sign Up</h3>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-4 text-lg text-black font-semibold outline-none rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="w-full text-red-600 text-start -mt-3 px-2 italic">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-4 text-lg text-black font-semibold outline-none rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="w-full text-red-600 text-start -mt-3 px-2 italic">{errors.email}</p>}

          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-4 text-lg text-black font-semibold outline-none rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-4 top-5 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible className="text-2xl" />
              ) : (
                <AiFillEye className="text-2xl" />
              )}
            </button>
          </div>
          {errors.password && <p className="w-full text-red-600 text-start -mt-3 px-2 italic">{errors.password}</p>}

          <select
            className="w-full px-4 py-4 text-lg text-black font-semibold outline-none rounded-xl appearance-none relative bg-white border border-gray-300 focus:border-violet-500 pr-12"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="student" className="text-black font-semibold">
              Student
            </option>
            <option value="alumni" className="text-black font-semibold">
              Alumni
            </option>
          </select>

          <button
            className="w-full px-4 py-4 text-lg bg-violet-700 text-white font-semibold rounded-xl hover:bg-violet-800 transition-all duration-75 ease-in-out mt-10"
            onClick={handleSignUp}
          >
            Sign Up
          </button>

          <p>or</p>
          <button className="w-full flex items-center px-6 py-3 text-lg bg-gray-300 text-black font-semibold rounded-xl hover:bg-gray-400 transition-all duration-75 ease-in-out">
            <span>
              <FcGoogle className="text-4xl" />
            </span>
            <p className="w-full text-center"> Sign up with Google</p>
          </button>
          <p className="text-gray-400 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-black font-medium">Log In</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
