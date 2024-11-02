import React from 'react';
import logo from '../../../assets/images/logo3.png';
import { FiHome } from "react-icons/fi";
import { FaRegEnvelope,FaRegComments,FaRegCalendarAlt,FaRegUser    } from "react-icons/fa";

function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { name: 'Home', key: 'home', icon: <FiHome size={18}/> },
    { name: 'Profile', key: 'profile', icon: <FaRegUser size={18}/> },
    { name: 'Availability', key: 'availability', icon: <FaRegCalendarAlt  size={18}/> },
    { name: 'Message Request', key: 'messageRequest', icon: <FaRegEnvelope size={18}/> },
    { name: 'Chat', key: 'chat', icon: <FaRegComments size={18}/> },
  ];

  return (
    <div className="w-64 bg-gray-100">
      <div className="flex items-center justify-center gap-4 p-4">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <h3 className="text-lg sm:text-2xl font-bold text-purple-800 -ml-1">
          CampusBuzz
        </h3>
      </div>
      <div className='w-[90%] mx-auto h-[1px] bg-gray-300 my-4'></div>
      <div className="w-full h-full p-4">
        <ul className="space-y-4">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              className={`flex items-center cursor-pointer p-2 rounded-lg text-gray-900  transition-all duration-300 ease-in-out hover:bg-purple-300 ${
                activeTab === tab.key ? 'bg-purple-300 text-violet-700 font-medium' : 'hover:bg-purple-300'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="mr-3">{tab.icon}</span>
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
