import React, { useState } from 'react';
import Sidebar from '../../components/almuni/navigationBar/Sidebar';
import Home from '../../components/almuni/Home';
import Profile from '../../components/almuni/Profile';
import Availability from '../../components/almuni/Availability';
import MessageRequest from '../../components/almuni/MessageRequest';
import Chat from '../../components/almuni/Chat';
import Navbar from '../../components/navbar/Navbar';
import Bottombar from '../../components/almuni/navigationBar/Bottombar';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'availability':
        return <Availability />;
      case 'messageRequest':
        return <MessageRequest />;
      case 'chat':
        return <Chat />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar visible only on large screens */}
        <div className="hidden lg:flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        {/* Main content area */}
        <div className="flex-1 w-full lg:p-6 pb-20 bg-white overflow-y-auto">
          {renderContent()}
        </div>
      </div>
      {/* Bottombar visible only on mobile and tablet screens */}
      <div className="w-full  lg:hidden">
        <Bottombar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default Dashboard;
