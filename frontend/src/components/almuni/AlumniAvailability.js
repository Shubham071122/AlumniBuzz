// import React, { useContext, useEffect, useRef, useState } from 'react';
// import MessageRequest from '../messages/MessageRequest';
// import AuthContext from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// function AlumniAvailability() {
//   const availableDates = [
//     {
//       id: 1,
//       alumni_id: 88058,
//       timeStampe: '2024-10-15T10:00:00+00:00', // October 15, 2024, 10:00 AM UTC
//       isBooked: false,
//     },
//     {
//       id: 2,
//       alumni_id: 88058,
//       timeStampe: '2024-10-15T12:00:00+00:00', // October 15, 2024, 12:00 PM UTC
//       isBooked: true,
//     },
//     {
//       id: 3,
//       alumni_id: 88058,
//       timeStampe: '2024-10-15T14:00:00+00:00', // October 15, 2024, 2:00 PM UTC
//       isBooked: false,
//     },
//     {
//       id: 4,
//       alumni_id: 88058,
//       timeStampe: '2024-10-16T10:00:00+00:00', // October 16, 2024, 10:00 AM UTC
//       isBooked: true,
//     },
//     {
//       id: 5,
//       alumni_id: 88058,
//       timeStampe: '2024-10-16T12:00:00+00:00', // October 16, 2024, 12:00 PM UTC
//       isBooked: true,
//     },
//     {
//       id: 6,
//       alumni_id: 88058,
//       timeStampe: '2024-10-16T14:00:00+00:00', // October 16, 2024, 2:00 PM UTC
//       isBooked: true,
//     },
//     {
//       id: 7,
//       alumni_id: 88058,
//       timeStampe: '2024-10-17T10:00:00+00:00', // October 17, 2024, 10:00 AM UTC
//       isBooked: true,
//     },
//     {
//       id: 8,
//       alumni_id: 88058,
//       timeStampe: '2024-10-17T12:00:00+00:00', // October 17, 2024, 12:00 PM UTC
//       isBooked: true,
//     },
//     {
//       id: 9,
//       alumni_id: 88058,
//       timeStampe: '2024-10-17T14:00:00+00:00', // October 17, 2024, 2:00 PM UTC
//       isBooked: false,
//     },
//     {
//       id: 10,
//       alumni_id: 88058,
//       timeStampe: '2024-10-18T10:00:00+00:00', // October 18, 2024, 10:00 AM UTC
//       isBooked: true,
//     },
//     {
//       id: 11,
//       alumni_id: 88058,
//       timeStampe: '2024-10-18T12:00:00+00:00', // October 18, 2024, 12:00 PM UTC
//       isBooked: true,
//     },
//     {
//       id: 12,
//       alumni_id: 88058,
//       timeStampe: '2024-10-18T14:00:00+00:00', // October 18, 2024, 2:00 PM UTC
//       isBooked: false,
//     },
//     {
//       id: 13,
//       alumni_id: 88058,
//       timeStampe: '2024-10-19T10:00:00+00:00', // October 19, 2024, 10:00 AM UTC
//       isBooked: true,
//     },
//     {
//       id: 14,
//       alumni_id: 88058,
//       timeStampe: '2024-10-19T12:00:00+00:00', // October 19, 2024, 12:00 PM UTC
//       isBooked: false,
//     },
//     {
//       id: 15,
//       alumni_id: 88058,
//       timeStampe: '2024-10-19T14:00:00+00:00', // October 19, 2024, 2:00 PM UTC
//       isBooked: true,
//     },
//     {
//       id: 16,
//       alumni_id: 88058,
//       timeStampe: '2024-10-19T15:00:00+00:00', // October 19, 2024, 2:00 PM UTC
//       isBooked: false,
//     },
//   ];

//   const {isAuthenticated} = useContext(AuthContext);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const messageRef = useRef(null);
//   const navigate = useNavigate();

//   const handleTimeClick = (date, time) => {
//     if(!isAuthenticated){
//       return navigate("/login")
//     }
//     setSelectedDate(date);
//     setSelectedTime(time);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setSelectedDate(null);
//     setSelectedTime(null);
//   };

//   const formatDateAndTime = (timeStampe) => {
//     const dateObj = new Date(timeStampe);
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const date = dateObj.toLocaleDateString(undefined, options);
//     const time = dateObj.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//     return { date, time };
//   };

//   const groupedByDate = availableDates.reduce((acc, current) => {
//     const { date, time } = formatDateAndTime(current.timeStampe);
//     if (!acc[date]) {
//       acc[date] = [];
//     }
//     acc[date].push({ ...current, time });
//     return acc;
//   }, {});

//   return (
//     <div className="w-full bg-white p-6 rounded-3xl shadow-sm relative border">
//       <h2 className="text-xl font-bold text-purple-900 mb-4">Availability</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {Object.entries(groupedByDate).map(([date, times], index) => (
//           <div key={index} className="border rounded p-4">
//             <h3 className="font-normal text-lg mb-2">{date}</h3>
//             <div className="grid grid-cols-3 gap-2">
//               {times.map((item) => (
//                 <button
//                   key={item.id}
//                   className={`border text-black font-light p-2 rounded ${
//                     item.isBooked
//                       ? 'bg-red-300'
//                       : 'bg-green-300 hover:bg-green-400'
//                   } transition`}
//                   onClick={() => handleTimeClick(date, item.time)}
//                   disabled={item.isBooked}
//                 >
//                   {item.time}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {showPopup && (
//         <div
//           ref={messageRef}
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//         >
//           <div
//             id="message-popup"
//             className="bg-white rounded-lg p-6"
//             onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
//           >
//             <MessageRequest
//               date={selectedDate}
//               time={selectedTime}
//               onClose={closePopup}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AlumniAvailability;


import React, { useContext, useEffect, useState, useRef } from 'react';
import MessageRequest from '../messages/MessageRequest';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AlumniAvailability() {
  const { isAuthenticated } = useContext(AuthContext);
  const [availabilityData, setAvailabilityData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const messageRef = useRef(null);
  const navigate = useNavigate();
  const userId = '674823c1f94d1d24f14b4316';

  // Fetch availability data from the backend
  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/mentor-ava/${userId}`,
          { withCredentials: true }
        );
        console.log("rsav:",response);
        const availability = response.data.schedule || {};
        setAvailabilityData(availability);
      } catch (error) {
        console.error('Error fetching availability:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, []);

  const handleTimeClick = (date, time) => {
    if (!isAuthenticated) {
      return navigate('/login');
    }
    setSelectedDate(date);
    setSelectedTime(time);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const formatTimeRange = (from, to) => `${from} - ${to}`;

  if (loading) {
    return <div>Loading availability...</div>;
  }

  if (!Object.keys(availabilityData).length) {
    return <div>No availability data found.</div>;
  }

  return (
    <div className="w-full bg-white p-6 rounded-3xl shadow-sm relative border">
      <h2 className="text-xl font-bold text-purple-900 mb-4">Availability</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(availabilityData).map(([date, times], index) => (
          <div key={index} className="border rounded p-4">
            <h3 className="font-normal text-lg mb-2">{date}</h3>
            <div className="grid grid-cols-3 gap-2">
              {times.map((slot) => (
                <button
                  key={slot._id}
                  className={`border text-black font-light p-2 rounded ${
                    slot.isBooked
                      ? 'bg-red-300'
                      : 'bg-green-300 hover:bg-green-400'
                  } transition`}
                  onClick={() => handleTimeClick(date, formatTimeRange(slot.from, slot.to))}
                  disabled={slot.isBooked}
                >
                  {formatTimeRange(slot.from, slot.to)}
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
