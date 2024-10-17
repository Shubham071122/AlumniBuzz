import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaUser, FaCalendarAlt, FaEnvelope, FaComments } from 'react-icons/fa';

function Sidebar({ activeTab, setActiveTab }) {
    const tabs = [
        { name: 'Home', key: 'home', icon: <AiFillHome /> },
        { name: 'Profile', key: 'profile', icon: <FaUser /> },
        { name: 'Availability', key: 'availability', icon: <FaCalendarAlt /> },
        { name: 'Message Request', key: 'messageRequest', icon: <FaEnvelope /> },
        { name: 'Chat', key: 'chat', icon: <FaComments /> }
      ];

  return (
    <div className="w-64 bg-purple-700 text-white p-4 py-10 space-y-4">
      <ul className="space-y-4">
        {tabs.map((tab) => (
          <li
            key={tab.key}
            className={`flex items-center cursor-pointer p-2 rounded-md hover:bg-purple-500 ${
              activeTab === tab.key ? 'bg-purple-500' : ''
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="mr-3">{tab.icon}</span>
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
