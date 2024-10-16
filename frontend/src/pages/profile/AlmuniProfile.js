import React, { useState, useEffect } from 'react';
import MaxwidthXL from '../../ScreenSizes/MaxwidthXL';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { IoSchool, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { PiGearFill } from 'react-icons/pi';
import Breadcrumbs from '../../components/breadCrumbs/BreadCrumbs';
import AlumniAvailability from '../../components/almuni/AlumniAvailability';

function AlumniProfile() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // If scrolling down
        setShowNavbar(false);
      } else {
        // If scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col bg-purple-50 z-0">
      {/* Conditionally render Navbar based on scroll */}
      <div
        className={`fixed top-0 left-0 w-full z-30 transition-transform duration-200 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Navbar />
      </div>

      <MaxwidthXL>
        <div className="flex flex-col lg:flex-row pt-16 md:pt-24 h-full z-0 relative">
          <div className="absolute left-0 top-6 md:top-14">
            <Breadcrumbs />
          </div>
          {/* Left side: Profile section */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-3xl shadow-sm lg:sticky lg:top-0 h-auto sm:h-[80vh] border">
            <div className="w-full flex flex-col items-center justify-center ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5Kp7mr110eb2v36-XoZf1OMOqkDhYgfjhA&s"
                alt="Profile"
                className="w-32 h-32 rounded-[40px] mb-4 object-cover object-center"
              />
              <h2 className="text-2xl font-bold text-purple-900">
                Shubham Kumar
              </h2>
              <p className="text-purple-500 font-medium mt-2">
                5⭐ <span className="text-gray-400">(20 reviews)</span>
              </p>
              <div className="w-[60%] mx-auto h-[1.5px] bg-gray-300 mt-2 shadow-md"></div>
              <div className="flex flex-col gap-4 mt-4">
                <p className="text-purple-500 flex items-center gap-4">
                  <IoSchool className="text-xl text-black" />{' '}
                  <span>XYZ University</span>
                </p>
                <p className="text-purple-500 flex items-start gap-4">
                  <PiGearFill className="text-xl flex-shrink-0 text-black" />{' '}
                  <p className="text-wrap flex flex-wrap">
                    Web Development, React, JavaScript,python, rust, go , .net,{' '}
                  </p>
                </p>

                <p className="flex items-center gap-4">
                  <IoLogoLinkedin className="text-xl" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    LinkedIn
                  </a>
                </p>

                <p className="flex items-center gap-4">
                  <IoLogoGithub className="text-xl" />
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 underline"
                  >
                    Github
                  </a>
                </p>
              </div>

              <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all">
                Meet Request
              </button>
            </div>
          </div>

          {/* Right side: Description section */}
          <div className="w-full lg:w-2/3 py-10 sm:py-0 sm:pb-1 sm:pl-8 overflow-y-auto lg:overflow-hidden flex flex-col gap-4">
              {/* Short description */}
            <div className="sm:p-3">
              <span className="bg-purple-200 font-semibold px-4 py-2 rounded-full text-purple-800 ">
                Software Developer
              </span>
              <p className="text-gray-700 text-3xl sm:text-4xl font-bold text-wrap tracking-normal mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>

            {/* Availability calendar */}
              <AlumniAvailability/>

            {/* About section */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold text-purple-900">About</h3>
              <p className="text-gray-600 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            {/* Job planning section */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold text-purple-900">
                Job Planning
              </h3>
              <p className="text-gray-600 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            {/* Additional sections */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold text-purple-900">
                Projects & Achievements
              </h3>
              <p className="text-gray-600 mt-3">
                Detailed information about alumni's work, projects, and key
                achievements.
              </p>
            </div>
          </div>
        </div>
      </MaxwidthXL>
      <Footer />
    </div>
  );
}

export default AlumniProfile;
