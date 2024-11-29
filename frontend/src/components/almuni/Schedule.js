import React, { useState } from 'react';
import { IoRemoveCircle } from 'react-icons/io5';
import { IoAddCircle } from 'react-icons/io5';
import Select from 'react-select';
import toast from 'react-hot-toast';

function Schedule({ schedule, setSchedule }) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Function to generate 15-minute intervals
  const generateTimeOptions = () => {
    const times = [];
    let time = new Date();
    time.setHours(0, 0, 0, 0); // Start at midnight
    while (time.getDate() === new Date().getDate()) {
      const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      times.push(formattedTime);
      time.setMinutes(time.getMinutes() + 15);
    }
    return times;
  };

  //  Const timeOptions = generateTimeOptions();
  const timeOptions = Array.from({ length: 96 }, (_, index) => {
    const hours = String(Math.floor(index / 4)).padStart(2, '0');
    const minutes = String((index % 4) * 15).padStart(2, '0');
    return `${hours}:${minutes}`;
  });
  const timeOptionsSelect = timeOptions.map((time) => ({
    value: time,
    label: time,
  }));

  // Toggle day selection and manage time slots
  const toggleDay = (day) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: prevSchedule[day] || [{ from: '', to: '' }],
    }));
  };

  // Handle time changes
  const handleTimeChange = (day, index, field, value) => {
    const updatedTimes = schedule[day].map((time, idx) =>
      idx === index ? { ...time, [field]: value } : time,
    );

    const fromTime = field === 'from' ? value : updatedTimes[index].from;
    const toTime = field === 'to' ? value : updatedTimes[index].to;

    if(fromTime && toTime && fromTime >= toTime){
      toast.error("End time must be later than start time.");
      return;
    }


    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: updatedTimes,
    }));
  };

  // Add an additional time slot
  const addTimeSlot = (day) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: [...(prevSchedule[day] || []), { from: '', to: '' }],
    }));
  };

  // Remove a specific time slot
  const removeTimeSlot = (day, index) => {
    const updatedTimes = schedule[day].filter((_, idx) => idx !== index);
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: updatedTimes.length ? updatedTimes : undefined,
    }));
  };

  const handleAddSchedule = () => {
    console.log('Schedule set');
    console.log(schedule);
  };

  return (
    <div className="p-4 md:p-8 border rounded-xl mt-5 relative">
  {days.map((day) => (
    <div key={day} className="border-b p-4 md:p-6">
      {/* Day checkbox */}
      <label className="flex items-center cursor-pointer gap-2 text-gray-700 capitalize text-lg">
        <input
          type="checkbox"
          onChange={() => toggleDay(day)}
          checked={!!schedule[day]}
          className="cursor-pointer w-5 h-5 mr-2 accent-green-800 rounded-3xl"
        />
        {day}
      </label>

      {/* Time slots */}
      {schedule[day] && (
        <div className="ml-4 md:ml-8 mt-6">
          {schedule[day].map((timeSlot, index) => (
            <div key={index} className="flex flex-row items-center gap-3 mb-3">
              {/* From Time Slot */}
              <Select
                options={timeOptionsSelect}
                value={timeOptionsSelect.find(
                  (option) => option.value === timeSlot.from,
                )}
                onChange={(selectedOption) =>
                  handleTimeChange(day, index, 'from', selectedOption.value)
                }
                placeholder="From"
                className="w-36"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    minHeight: '30px',
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
              <p className='text-gray-400'>-</p>
              {/* To Time Slot */}
              <Select
                options={timeOptionsSelect}
                value={timeOptionsSelect.find(
                  (option) => option.value === timeSlot.to,
                )}
                onChange={(selectedOption) =>
                  handleTimeChange(day, index, 'to', selectedOption.value)
                }
                placeholder="To"
                className="w-36"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    minHeight: '30px',
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

              {/* Remove time slot button */}
              <button
                onClick={() => removeTimeSlot(day, index)}
                className="text-gray-500 text-sm hover:text-gray-400"
              >
                <IoRemoveCircle size={20} />
              </button>
            </div>
          ))}

          {/* Add Time Slot button */}
          <button
            onClick={() => addTimeSlot(day)}
            className="text-white bg-violet-500 px-2 py-2 rounded-lg text-sm mt-2 hover:bg-violet-600 transition-colors duration-300 ease-in-out"
          >
            <IoAddCircle size={20} />
          </button>
        </div>
      )}
    </div>
  ))}
  
  {/* Add Schedule Button */}
  <button
    className="absolute top-4 right-4 md:top-8 md:right-8 bg-black text-white p-2 px-4 rounded-lg"
    onClick={handleAddSchedule}
  >
    Add
  </button>
</div>

  );
}

export default Schedule;
