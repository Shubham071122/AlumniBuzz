import React, { useEffect, useRef, useState } from 'react';
import MessageRequest from '../messages/MessageRequest';

function AlumniAvailability() {
  const availableDates = [
    {
      date: "2024-10-21",
      times: ["4:00 PM", "5:00 PM", "6:00 PM"],
    },
    {
      date: "2024-10-24",
      times: ["3:00 PM", "4:00 PM", "5:00 PM","6:00 PM"],
    },
    {
      date: "2024-10-15",
      times: ["2:00 PM", "3:00 PM", "4:00 PM"],
    },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const messageRef = useRef(null);

  const handleTimeClick = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
    <div className="w-full bg-white p-6 rounded-3xl shadow-md relative">
      <h2 className="text-xl font-bold text-purple-900 mb-4">
        Availability
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {availableDates.map((item, index) => (
          <div key={index} className="border rounded p-4">
            <h3 className="font-semibold text-lg">{item.date}</h3>  
            <div className="grid grid-cols-3 gap-2">
              {item.times.map((time, idx) => (
                <button
                  key={idx}
                  className="border p-2 rounded hover:bg-purple-100 transition"
                  onClick={() => handleTimeClick(item.date, time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div 
        ref={messageRef}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            id="message-popup"
            className="bg-white rounded-lg p-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
          >
            <MessageRequest 
              date={selectedDate} 
              time={selectedTime} 
              onClose={closePopup} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AlumniAvailability;
