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
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-300 to-violet-400 px-4 sm:px-0">
      <div className="w-full max-w-[90%] sm:max-w-[75%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] bg-purple-100 flex flex-col items-center justify-center py-10 px-6 sm:px-6 md:px-10 gap-4 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-violet-800 font-bold">CampusBuzz</h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl text-black font-bold mb-5">Sign Up</h3>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg text-black font-medium outline-none rounded-xl border border-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="w-full text-red-600 text-start -mt-3 px-2 italic">{errors.name}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg text-black font-medium outline-none rounded-xl border border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="w-full text-red-600 text-start -mt-3 px-2 italic">{errors.email}</p>}

        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg text-black font-medium outline-none rounded-xl border border-gray-300"
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
        {errors.password && <p className="w-full text-red-600 text-start -mt-3 px-2 italic">{errors.password}</p>}

        <select
          className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg text-black font-medium outline-none rounded-xl border border-gray-300 relative bg-white focus:border-violet-500 pr-12"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="student" className="text-black font-medium">
            Student
          </option>
          <option value="alumni" className="text-black font-medium">
            Alumni
          </option>
        </select>

        <button
          className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg bg-violet-700 text-white font-medium rounded-xl hover:bg-violet-800 transition-all duration-75 ease-in-out mt-5 sm:mt-10"
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        <p className="text-sm sm:text-base">or</p>
        <button className="w-full flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg bg-gray-300 text-black font-medium rounded-xl hover:bg-gray-400 transition-all duration-75 ease-in-out">
          <span>
            <FcGoogle className="text-2xl sm:text-4xl" />
          </span>
          <p className="w-full text-center">Sign up with Google</p>
        </button>
        <p className="text-gray-400 font-medium text-sm sm:text-base">
          Already have an account?{' '}
          <Link to="/login" className="text-black font-medium">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
