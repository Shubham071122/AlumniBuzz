import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import MaxwidthXXL from '../../ScreenSizes/MaxwidthXXL';
import { IoSchool, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { PiGearFill } from 'react-icons/pi';

const Dashboard = () => {
  const [progress, setProgress] = useState(0);

  // Track data completion
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    linkedin: '',
    github: '',
  });

  const [academicInfo, setAcademicInfo] = useState({
    collegeUg: '',
    yearOfPassingUG: '',
    collegePg: '',
    yearOfPassingPG: ''
  });

  const [jobInfo, setJobInfo] = useState({
    currentCompany: '',
    jobRole: '',
    skills: '',
    workExperience: '',
    exCompany: '',
  });

  const [extraActivities, setExtraActivities] = useState('');
  const [aboutSection, setAboutSection] = useState('');
  const [futurePlans, setFuturePlans] = useState('');

  // Function to calculate progress
  const calculateProgress = () => {
    let completedFields = 0;
    const totalFields = 18; // Total fields to check

    // Check personal info fields
    Object.values(personalInfo).forEach((value) => value && completedFields++);
    // Check academic info fields
    Object.values(academicInfo).forEach((value) => value && completedFields++);
    // Check job info fields
    Object.values(jobInfo).forEach((value) => value && completedFields++);
    // Check other sections
    if (extraActivities) completedFields++;
    if (aboutSection) completedFields++;
    if (futurePlans) completedFields++;

    setProgress((completedFields / totalFields) * 100);
  };

  useEffect(() => {
    calculateProgress();
  }, [
    personalInfo,
    academicInfo,
    jobInfo,
    extraActivities,
    aboutSection,
    futurePlans,
  ]);

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <Navbar />
      <MaxwidthXXL>
        <div className='flex flex-col lg:flex-row pt-16 md:pt-24 h-full z-0'>
        {/* Profile section left*/}
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

          {/* Info section right */}
          <div className="w-full lg:w-2/3 py-10 sm:py-0 sm:pb-1 sm:pl-8 overflow-y-auto lg:overflow-hidden flex flex-col gap-4">
            {/* Progress Bar */}
            <div className="w-full p-6 overflow-y-auto lg:overflow-hidden flex flex-col gap-4">
              <h2 className="text-purple-900 text-lg font-bold">
                Profile Completion
              </h2>
              <div className="w-full bg-gray-300 h-4 rounded-md mt-2">
                <div
                  className="bg-purple-700 h-4 rounded-md transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 mt-2">
                {progress.toFixed(0)}% Complete
              </p>
            </div>

            {/* Personal Information */}
            <div className="bg-white shadow-md p-6 rounded-md mb-8">
              <h2 className="text-purple-900 text-lg font-bold mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border p-3 rounded-md w-full"
                  value={personalInfo.name}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-md w-full"
                  value={personalInfo.email}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border p-3 rounded-md w-full"
                  value={personalInfo.address}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      address: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Contact"
                  className="border p-3 rounded-md w-full"
                  value={personalInfo.contact}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      contact: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="LinkedIn Profile"
                  className="border p-3 rounded-md w-full"
                  value={personalInfo.linkedin}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      linkedin: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="GitHub Profile"
                  className="border p-3 rounded-md w-full"
                  value={personalInfo.github}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, github: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="bg-white shadow-md p-6 rounded-md mb-8">
              <h2 className="text-purple-900 text-lg font-bold mb-4">
                Academic Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="College UG"
                  className="border p-3 rounded-md w-full"
                  value={academicInfo.collegeUg}
                  onChange={(e) =>
                    setAcademicInfo({
                      ...academicInfo,
                      collegeUg: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Year of Passing (UG)"
                  className="border p-3 rounded-md w-full"
                  value={academicInfo.yearOfPassingUG}
                  onChange={(e) =>
                    setAcademicInfo({
                      ...academicInfo,
                      yearOfPassingUG: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="College PG"
                  className="border p-3 rounded-md w-full"
                  value={academicInfo.collegePg}
                  onChange={(e) =>
                    setAcademicInfo({
                      ...academicInfo,
                      collegePg: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Year of Passing (PG)"
                  className="border p-3 rounded-md w-full"
                  value={academicInfo.yearOfPassingPG}
                  onChange={(e) =>
                    setAcademicInfo({
                      ...academicInfo,
                      yearOfPassingPG: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Job Information */}
            <div className="bg-white shadow-md p-6 rounded-md mb-8">
              <h2 className="text-purple-900 text-lg font-bold mb-4">
                Job Experience
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Current Company"
                  className="border p-3 rounded-md w-full"
                  value={jobInfo.currentCompany}
                  onChange={(e) =>
                    setJobInfo({ ...jobInfo, currentCompany: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Job Role"
                  className="border p-3 rounded-md w-full"
                  value={jobInfo.jobRole}
                  onChange={(e) =>
                    setJobInfo({ ...jobInfo, jobRole: e.target.value })
                  }
                />
                <textarea
                  placeholder="Skills"
                  className="border p-3 rounded-md w-full"
                  value={jobInfo.skills}
                  onChange={(e) =>
                    setJobInfo({ ...jobInfo, skills: e.target.value })
                  }
                />
                <textarea
                  placeholder="Work Experience"
                  className="border p-3 rounded-md w-full"
                  value={jobInfo.workExperience}
                  onChange={(e) =>
                    setJobInfo({ ...jobInfo, workExperience: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Ex-Company"
                  className="border p-3 rounded-md w-full"
                  value={jobInfo.exCompany}
                  onChange={(e) =>
                    setJobInfo({ ...jobInfo, exCompany: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Extra Activities */}
            <div className="bg-white shadow-md p-6 rounded-md mb-8">
              <h2 className="text-purple-900 text-lg font-bold mb-4">
                Extra Activities
              </h2>
              <textarea
                placeholder="Extra Activities"
                className="border p-3 rounded-md w-full"
                value={extraActivities}
                onChange={(e) => setExtraActivities(e.target.value)}
              />
            </div>

            {/* About Section */}
            <div className="bg-white shadow-md p-6 rounded-md mb-8">
              <h2 className="text-purple-900 text-lg font-bold mb-4">
                About Me
              </h2>
              <textarea
                placeholder="Tell us about yourself"
                className="border p-3 rounded-md w-full"
                value={aboutSection}
                onChange={(e) => setAboutSection(e.target.value)}
              />
            </div>

            {/* Future Plans */}
            <div className="bg-white shadow-md p-6 rounded-md mb-8">
              <h2 className="text-purple-900 text-lg font-bold mb-4">
                Future Plans
              </h2>
              <textarea
                placeholder="Share your future career plans"
                className="border p-3 rounded-md w-full"
                value={futurePlans}
                onChange={(e) => setFuturePlans(e.target.value)}
              />
            </div>
          </div>
        </div>
      </MaxwidthXXL>
    </div>
  );
};

export default Dashboard;
