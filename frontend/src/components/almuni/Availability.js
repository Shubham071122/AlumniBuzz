import React, { useState } from 'react';
import Select from 'react-select';
import moment from 'moment-timezone';
import MaxwidthXL from '../../ScreenSizes/MaxwidthXL';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FiCalendar } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import meetlogo from '../../assets/images/google-meet.webp';
import zoomlogo from '../../assets/images/Zoom.png';
import Schedule from './Schedule';

const Availability = () => {
  const [timeZone, setTimeZone] = useState('');
  const [duration, setDuration] = useState('1 week');
  const [meetingMode, setMeetingMode] = useState('');

  const timezoneOptions = moment.tz.names().map((tz) => ({
    value: tz,
    label: tz,
  }));

  const durationOptions = [
    { value: '', label: 'Select' },
    { value: '1w', label: '1 Week' },
    { value: '2w', label: '2 Weeks' },
    { value: '3w', label: '3 Weeks' },
    { value: '1m', label: '1 Month' },
    { value: '2m', label: '2 Months' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto">
      <MaxwidthXL>
        <div>
          <h1 className="text-4xl font-bold text-purple-800">Availability</h1>
        </div>
        <div className="w-[100%] mx-auto h-[1px] bg-gray-300 my-4"></div>
        <div>
          <h2 className="text-3xl font-medium">Calendar</h2>
          <div>
            {/* *** */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-48 my-5 -ml-8 sm:ml-0 border-b py-5">
              {/* lables */}
              <div className="flex gap-4">
                <MdOutlineLocationOn size={26} className="mt-1" />
                <div className="w-full flex flex-col">
                  <p className="text-lg font-semibold">TimeZone</p>
                  <p className="text-gray-500">
                    Required for timely communications
                  </p>
                </div>
              </div>
              {/* Input box */}
              <div className="w-72 ml-14 md:ml-16 sm:ml-0 ">
                <Select
                  options={timezoneOptions}
                  placeholder="Select TimeZone"
                  className="text-gray-700"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      borderColor: '#cbd5e0',
                      padding: '2px',
                      borderRadius: '0.5rem',
                      '&:hover': {
                        borderColor: 'black',
                      },
                    }),
                    menu: (provided) => ({
                      ...provided,
                      color: 'black',
                      backgroundColor: 'white',
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: '#4a5568',
                    }),
                  }}
                />
              </div>
            </div>
            {/* *** */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-40 my-3 sm:my-5 -ml-4 sm:ml-0 border-b py-5">
              {/* lables */}
              <div className="flex gap-4">
                <FiCalendar size={22} className="mt-1" />
                <div className="w-full flex flex-col">
                  <p className="text-lg font-semibold">Duration</p>
                  <p className="text-gray-500">
                    How far in the future can attendees book
                  </p>
                </div>
              </div>
              {/* Input box */}
              <div className="w-72 ml-6 md:ml-16 sm:ml-0">
                <Select
                  options={durationOptions}
                  placeholder="Select"
                  className="text-gray-700"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      borderColor: '#cbd5e0',
                      padding: '2px',
                      borderRadius: '0.5rem',
                      '&:hover': {
                        borderColor: 'black',
                      },
                    }),
                    menu: (provided) => ({
                      ...provided,
                      color: 'black',
                      backgroundColor: 'white',
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: '#4a5568',
                    }),
                  }}
                />
              </div>
            </div>
            {/* *** */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-40 my-5 border-b py-5">
              {/* lables */}
              <div className="flex gap-4">
                <IoVideocamOutline size={22} className="mt-1" />
                <div className="w-full flex flex-col">
                  <p className="text-lg font-semibold">Meeting Location</p>
                  <p className="text-gray-500">
                    Use your preferred video conferencing tool for 1:1 meetings
                  </p>
                </div>
              </div>
              {/* Input box */}
              <div className="flex gap-10 flex-col sm:flex-row -ml-28 md:-ml-16 lg:ml-0">
                {/* Google Meet Option */}
                <label
                  className={`flex items-center cursor-pointer gap-2 ${
                    meetingMode === 'googleMeet'
                      ? 'text-purple-700 font-medium'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setMeetingMode('googleMeet')}
                >
                  <input
                    type="radio"
                    name="meetingMode"
                    value="googleMeet"
                    checked={meetingMode === 'googleMeet'}
                    onChange={() => setMeetingMode('googleMeet')}
                    className="cursor-pointer mr-4 w-4 h-4"
                  />
                  <img src={meetlogo} className="w-10 h-9 mr-1" />
                  Google Meet
                </label>

                {/* Zoom Option */}
                <label
                  className={`flex items-center cursor-pointer gap-2 ${
                    meetingMode === 'zoom'
                      ? 'text-purple-700 font-medium'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setMeetingMode('zoom')}
                >
                  <input
                    type="radio"
                    name="meetingMode"
                    value="zoom"
                    checked={meetingMode === 'zoom'}
                    onChange={() => setMeetingMode('zoom')}
                    className="cursor-pointer w-4 h-4"
                  />
                  <img src={zoomlogo} className="w-16 h-9 -mr-3" />
                  Zoom
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-10">
          <h2 className="text-3xl font-medium ">Schedule</h2>
          <Schedule />
        </div>
        <div className="w-full flex justify-end items-center mt-8">
          <button className="bg-violet-800 text-white px-7 py-2 rounded-lg hover:bg-violet-700">
            Save
          </button>
        </div>
      </MaxwidthXL>
    </div>
  );
};

export default Availability;
