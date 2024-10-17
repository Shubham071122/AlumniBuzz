import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css'; 
import 'react-time-picker/dist/TimePicker.css'; 

const Availability = () => {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('10:00'); 
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleDateChange = (date) => {
    setDate(date);
    setAvailableTimes([]); 
  };

  const addTimeSlot = () => {
    if (!timeSlots.includes(selectedTime)) {
      setTimeSlots((prevSlots) => [...prevSlots, selectedTime]);
      setAvailableTimes((prevTimes) => [...prevTimes, { date, time: selectedTime }]);
      setSelectedTime('10:00'); 
    }
  };

  const removeTimeSlot = (timeToRemove) => {
    setTimeSlots((prevSlots) => prevSlots.filter((time) => time !== timeToRemove));
    setAvailableTimes((prevTimes) => prevTimes.filter((slot) => slot.time !== timeToRemove));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">Select Your Availability</h2>

        {/* Calendar for date selection */}
        <div className="mb-6">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="border-0 mx-auto"
          />
        </div>

        {/* Time Picker for selecting time slots */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <TimePicker
            onChange={setSelectedTime}
            value={selectedTime}
            className="w-40 p-2 border border-gray-300 rounded-md shadow-sm"
            clockClassName="hidden" 
          />
          <button
            onClick={addTimeSlot}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
          >
            Add Time Slot
          </button>
        </div>

        {/* Display selected time slots */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Selected Time Slots</h3>
          {timeSlots.length > 0 ? (
            <ul className="space-y-4">
              {timeSlots.map((time, index) => (
                <li key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                  <span className="text-gray-700">{`${time} on ${date.toLocaleDateString()}`}</span>
                  <button
                    onClick={() => removeTimeSlot(time)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No time slots selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
