import React from 'react';
import MaxwidthXL from '../../ScreenSizes/MaxwidthXL';
import { NavLink } from 'react-router-dom';
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black pt-5 mt-20">
      <MaxwidthXL>
        <div className='flex justify-between px-10'>
          <div className="flex items-start gap-10">
            <div className="flex flex-col justify-start text-white font-medium text-sm gap-2">
              <h3 className="text-2xl mb-4">About</h3>
              <p>Who are we?</p>
              <p>Our commitement</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Almuni Buzz around the world</p>
              <p>Meeting</p>
            </div>
            <div className="flex flex-col justify-start text-white font-medium text-sm gap-2">
              <h3 className="text-2xl mb-4">All subjects</h3>
              <p>Arts & hobbies</p>
              <p>Professional Development</p>
              <p>Computer Sciences</p>
              <p>Languages</p>
              <p>Music</p>
              <p>Health & well-being</p>
              <p>Academic tutoring</p>
              <p>Sports</p>
            </div>
            <div className="flex flex-col justify-start text-white font-medium text-sm gap-2">
              <h3 className="text-2xl mb-4">Help</h3>
              <p>Need help?</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl mb-4">Follow us</h3>
            <div className='flex justify-between items-center'>
              <NavLink to="#" className="text-2xl hover:text-purple-500 transition-colors duration-75 ease-in-out"><RiInstagramFill/></NavLink>
              <NavLink to="#" className="text-2xl hover:text-purple-500 transition-colors duration-75 ease-in-out"><FaLinkedin/></NavLink>
              <NavLink to="#" className="text-2xl hover:text-purple-500 transition-colors duration-75 ease-in-out"><FaSquareXTwitter/></NavLink>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-400 my-10"></div>
        <p className="text-gray-500 text-center text-sm">
          © 2024. All right reserved by Almuni Buzz
        </p>
      </MaxwidthXL>
    </div>
  );
}

export default Footer;
