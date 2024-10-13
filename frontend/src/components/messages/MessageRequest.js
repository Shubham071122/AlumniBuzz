import React from 'react';

const MessageRequest = ({ date, onClose }) => {
  const handleSubmit = () => {
    alert(`Request sent for ${date}`);
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold">Request Meeting</h2>
        <p className="mb-4">You selected {date}. Would you like to send a request?</p>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Send Request
        </button>
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MessageRequest;
