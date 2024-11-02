import React, { useState, useEffect } from 'react';
import { IoSchool, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { PiGearFill } from 'react-icons/pi';

import { FaSpinner } from 'react-icons/fa';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import MaxwidthXL from '../../ScreenSizes/MaxwidthXL';
import Footer from '../footer/Footer';
import AlumniSkills from './AlumniSkills';

const Profile = () => {
  const [progress, setProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState(null);
  const [avatarLoading, setAvatarLoading] = useState(false);

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
    yearOfPassingPG: '',
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

  // Handle Image Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result); // Set the preview image
    };

    if (file) {
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Info section right */}
      {/* <div className="w-full lg:w-2/3 overflow-y-auto flex flex-col gap-4"> */}
      <MaxwidthXL>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-10">
          {/* Image Upload */}
          <div className="w-44 h-44 relative rounded-full border-1 border-white shadow-md bg-gray-300">
            {avatarLoading ? (
              <div className="w-44 h-44 flex items-center justify-center bg-gray-300 rounded-full">
                <FaSpinner className="animate-spin text-4xl text-gray-600" />
              </div>
            ) : (
              <img
                src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid"
                alt="avatar"
                className="w-full h-full object-cover rounded-full border-4 border-white text-center"
              />
            )}
            <div className="absolute bottom-4 right-4 px-2 py-2 bg-white text-xl rounded-full shadow-md">
              <label htmlFor="avatar" className="cursor-pointer">
                <MdOutlineModeEditOutline />
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={handleFileChange}
                className="opacity-0 w-0 h-0 absolute"
              />
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full lg:w-[70%] p-4 lg:p-6 overflow-y-auto lg:overflow-hidden flex flex-col gap-4">
            <h2 className="text-purple-900 text-lg font-bold">Profile Completion</h2>
            <div className="w-full bg-gray-300 h-4 rounded-md mt-2">
              <div
                className="bg-purple-700 h-4 rounded-md transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-600 mt-2">{progress.toFixed(0)}% Complete</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white shadow-sm p-4 sm:p-6 rounded-3xl mb-8 border">
          <h2 className="text-purple-900 text-lg font-bold mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 font-medium">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="border p-3 rounded-md w-full"
                value={personalInfo.name}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-md w-full"
                value={personalInfo.email}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Address</label>
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
            </div>
            <div>
              <label className="text-gray-600 font-medium">Contact</label>
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
            </div>
            <div>
              <label className="text-gray-600 font-medium">
                LinkedIn Profile
              </label>
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
            </div>
            <div>
              <label className="text-gray-600 font-medium">
                GitHub Profile
              </label>
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
        </div>

        {/* Academic Information */}
        <div className="bg-white shadow-sm p-4 sm:p-6 rounded-3xl mb-8 border">
          <h2 className="text-purple-900 text-lg font-bold mb-4">
            Academic Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 font-medium">College UG</label>
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
            </div>
            <div>
              <label className="text-gray-600 font-medium">
                Year of Passing (UG)
              </label>
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
            </div>
            <div>
              <label className="text-gray-600 font-medium">College PG</label>
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
            </div>
            <div>
              <label className="text-gray-600 font-medium">
                Year of Passing (PG)
              </label>
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
        </div>

        {/* Job Information */}
        <div className="bg-white shadow-sm p-4 sm:p-6 rounded-3xl mb-8 border">
          <h2 className="text-purple-900 text-lg font-bold mb-4">
            Job Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 font-medium">
                Current Company
              </label>
              <input
                type="text"
                placeholder="Current Company"
                className="border p-3 rounded-md w-full"
                value={jobInfo.currentCompany}
                onChange={(e) =>
                  setJobInfo({ ...jobInfo, currentCompany: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Job Role</label>
              <input
                type="text"
                placeholder="Job Role"
                className="border p-3 rounded-md w-full"
                value={jobInfo.jobRole}
                onChange={(e) =>
                  setJobInfo({ ...jobInfo, jobRole: e.target.value })
                }
              />
            </div>
              <AlumniSkills/>
            <div>
              <label className="text-gray-600 font-medium">Ex-Company</label>
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
            <div>
              <label className="text-gray-600 font-medium">
                Work Experience
              </label>
              <textarea
                placeholder="Work Experience"
                className="border p-3 rounded-md w-full"
                value={jobInfo.workExperience}
                onChange={(e) =>
                  setJobInfo({ ...jobInfo, workExperience: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Extra Activities */}
        <div className="bg-white shadow-sm p-4 sm:p-6 rounded-3xl mb-8 border">
          <h2 className="text-purple-900 text-lg font-bold mb-4">
            Extra Activities
          </h2>
          <label className="text-gray-600 font-medium">Extra Activities</label>
          <textarea
            placeholder="Extra Activities"
            className="border p-3 rounded-md w-full"
            value={extraActivities}
            onChange={(e) => setExtraActivities(e.target.value)}
          />
        </div>

        {/* About Section */}
        <div className="bg-white shadow-sm p-4 sm:p-6 rounded-3xl mb-8 border">
          <h2 className="text-purple-900 text-lg font-bold mb-4">About Me</h2>
          <label className="text-gray-600 font-medium">About Me</label>
          <textarea
            placeholder="Tell us about yourself"
            className="border p-3 rounded-md w-full"
            value={aboutSection}
            onChange={(e) => setAboutSection(e.target.value)}
          />
        </div>

        {/* Future Plans */}
        <div className="bg-white shadow-sm p-4 sm:p-6 rounded-3xl mb-14 border">
          <h2 className="text-purple-900 text-lg font-bold mb-4">
            Future Plans
          </h2>
          <label className="text-gray-600 font-medium">Future Plans</label>
          <textarea
            placeholder="Share your future career plans"
            className="border p-3 rounded-md w-full"
            value={futurePlans}
            onChange={(e) => setFuturePlans(e.target.value)}
          />
        </div>

        {/* Save button */}
        <button className="absolute right-4 top-80 md:top-5 md:right-10 lg:top-2 lg:right-16 px-8 py-2 bg-purple-700 text-white border rounded-xl hover:bg-purple-600">
          Update
        </button>
      </MaxwidthXL>
      {/* </div> */}
    </div>
  );
};

export default Profile;
