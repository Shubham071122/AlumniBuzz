import React, { useEffect, useRef, useState } from 'react';
import './FeedbackCarousel.css';
import FeedbackCard from './FeedbackCard.js';

const Feedbacks = [
  {
    studentName: 'Amit Verma',
    alumniName: 'Rohit Sharma',
    comment:
      'The guidance from Rohit was amazing and very helpful for my career growth!',
    image_url:
      'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid',
    rating: 5,
  },
  {
    studentName: 'Sneha Patel',
    alumniName: 'Neha Gupta',
    comment:
      'Neha provided valuable insights on how to approach job interviews.',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXhe1rMe5dD93dgKsPNuKd1KlE-bxSMYv56eRRaSh2KjdCO4e56vSPQrAsEFFXIDuyjE&usqp=CAU',
    rating: 4,
  },
  {
    studentName: 'Rahul Singh',
    alumniName: 'Vivek Kumar',
    comment: "Vivek's advice on improving technical skills was on point.",
    image_url:
      'https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg',
    rating: 5,
  },
  {
    studentName: 'Priya Mehra',
    alumniName: 'Anjali Verma',
    comment:
      'It was great to connect with Anjali. Her suggestions really helped me.',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilq9Pygb0dFdkwuRmkrkF0_HBOOF2B2Gajg&s',
    rating: 4,
  },
  {
    studentName: 'Karan Roy',
    alumniName: 'Sandeep Rao',
    comment: "Sandeep's mentorship boosted my confidence for interviews.",
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4Buvn1Tug8KuPhYAAREN1EWKRCq3vniiBg&s',
    rating: 5,
  },
  {
    studentName: 'Pooja Singh',
    alumniName: 'Ravi Shah',
    comment:
      'Ravi shared some great strategies to prepare for campus placements.',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU04_BMZwlN0onqJVp4KBXJ8rTjsJ9pdK2pA&s',
    rating: 5,
  },
  {
    studentName: 'Ankit Gupta',
    alumniName: 'Nisha Agarwal',
    comment: "Nisha's suggestions on soft skills were very insightful.",
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xcnTzEA3Fv59eq5rqNrxXZ2BdlzX468I5w&s',
    rating: 4,
  },
  {
    studentName: 'Shruti Kapoor',
    alumniName: 'Aman Khan',
    comment: 'Aman provided excellent career advice and encouragement.',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5Kp7mr110eb2v36-XoZf1OMOqkDhYgfjhA&s',
    rating: 5,
  },
];

function FeedbackCarousel() {
  const [autoScroll, setAutoScroll] = useState(true);
  const carouselRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    let scrollInterval;

    if (autoScroll) {
      scrollInterval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({
            left: carouselRef.current.clientWidth,
            behavior: 'smooth',
          });
        }
      }, 3000);
    }

    return () => clearInterval(scrollInterval);
  }, [autoScroll]);

  const handleManualScroll = (direction) => {
    setAutoScroll(false);
    if (carouselRef.current) {
      const scrollAmount =
        direction === 'left'
          ? -carouselRef.current.clientWidth
          : carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Fade effect */}
      <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="overflow-x-hidden flex p-5 hide_scrollbar scroll-smooth"
        onScroll={() => setAutoScroll(false)}
      >
        {Feedbacks.map((feedback, index) => (
          <div className="flex-shrink-0 w-full grid grid-cols-1" key={index}>
            <FeedbackCard
              studentName={feedback.studentName}
              alumniName={feedback.alumniName}
              comment={feedback.comment}
              image_url={feedback.image_url}
              rating={feedback.rating}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-between px-4">
        <button
          className="bg-purple-700 text-white p-2 rounded-full"
          onClick={() => handleManualScroll('left')}
        >
          &#9664; {/* Left arrow */}
        </button>
        <button
          className="bg-purple-700 text-white p-2 rounded-full"
          onClick={() => handleManualScroll('right')}
        >
          &#9654; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}
export default FeedbackCarousel;
