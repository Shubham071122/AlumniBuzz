import React from 'react';
import logo from '../../../assets/images/logo3.png';
import { FiHome } from "react-icons/fi";
import { FaRegEnvelope, FaRegComments, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";

function Bottombar({ activeTab, setActiveTab }) {
  const tabs = [
    { name: 'Home', key: 'home', icon: <FiHome size={18} /> },
    { name: 'Profile', key: 'profile', icon: <FaRegUser size={18} /> },
    { name: 'Availability', key: 'availability', icon: <FaRegCalendarAlt size={18} /> },
    { name: 'Request', key: 'messageRequest', icon: <FaRegEnvelope size={18} /> },
    { name: 'Chat', key: 'chat', icon: <FaRegComments size={20} /> },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-slate-100 z-50 rounded-t-[30px] border-t-[1px] border-gray-600 shadow-top">
      <ul className="w-full flex items-center gap-2 justify-evenly p-5">
        {tabs.map((tab) => (
          <li
            key={tab.key}
            className={`flex flex-col items-center cursor-pointer text-sm text-gray-900 transition-all duration-300 ease-in-out ${
              activeTab === tab.key ? 'text-violet-900 font-medium' : 'hover:text-purple-800'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span>{tab.icon}</span>
            <span className="text-center leading-tight break-words mt-1">{tab.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bottombar;
