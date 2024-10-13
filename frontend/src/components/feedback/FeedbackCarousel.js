// import React, { useEffect, useRef, useState } from 'react';
// import './FeedbackCarousel.css';
// import FeedbackCard from './FeedbackCard.js';

// const Feedbacks = [
//   {
//     studentName: 'Amit Verma',
//     alumniName: 'Rohit Sharma',
//     comment:
//       'The guidance from Rohit was amazing and very helpful for my career growth!',
//     image_url:
//       'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid',
//     rating: 5,
//   },
//   {
//     studentName: 'Sneha Patel',
//     alumniName: 'Neha Gupta',
//     comment:
//       'Neha provided valuable insights on how to approach job interviews.',
//     image_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXhe1rMe5dD93dgKsPNuKd1KlE-bxSMYv56eRRaSh2KjdCO4e56vSPQrAsEFFXIDuyjE&usqp=CAU',
//     rating: 4,
//   },
//   {
//     studentName: 'Rahul Singh',
//     alumniName: 'Vivek Kumar',
//     comment: "Vivek's advice on improving technical skills was on point.",
//     image_url:
//       'https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg',
//     rating: 5,
//   },
//   {
//     studentName: 'Priya Mehra',
//     alumniName: 'Anjali Verma',
//     comment:
//       'It was great to connect with Anjali. Her suggestions really helped me.',
//     image_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilq9Pygb0dFdkwuRmkrkF0_HBOOF2B2Gajg&s',
//     rating: 4,
//   },
//   {
//     studentName: 'Karan Roy',
//     alumniName: 'Sandeep Rao',
//     comment: "Sandeep's mentorship boosted my confidence for interviews.",
//     image_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4Buvn1Tug8KuPhYAAREN1EWKRCq3vniiBg&s',
//     rating: 5,
//   },
//   {
//     studentName: 'Pooja Singh',
//     alumniName: 'Ravi Shah',
//     comment:
//       'Ravi shared some great strategies to prepare for campus placements.',
//     image_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU04_BMZwlN0onqJVp4KBXJ8rTjsJ9pdK2pA&s',
//     rating: 5,
//   },
//   {
//     studentName: 'Ankit Gupta',
//     alumniName: 'Nisha Agarwal',
//     comment: "Nisha's suggestions on soft skills were very insightful.",
//     image_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xcnTzEA3Fv59eq5rqNrxXZ2BdlzX468I5w&s',
//     rating: 4,
//   },
//   {
//     studentName: 'Shruti Kapoor',
//     alumniName: 'Aman Khan',
//     comment: 'Aman provided excellent career advice and encouragement.',
//     image_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5Kp7mr110eb2v36-XoZf1OMOqkDhYgfjhA&s',
//     rating: 5,
//   },
// ];

// function FeedbackCarousel() {
//   const [autoScroll, setAutoScroll] = useState(true);
//   const carouselRef = useRef(null);
//   const [isMouseDown, setIsMouseDown] = useState(false);

//   // Auto-scroll functionality
//   useEffect(() => {
//     let scrollInterval;

//     if (autoScroll) {
//       scrollInterval = setInterval(() => {
//         if (carouselRef.current) {
//           carouselRef.current.scrollBy({
//             left: carouselRef.current.clientWidth / 3, // Adjust for showing 3 cards
//             behavior: 'smooth',
//           });
//         }
//       }, 3000);
//     }

//     return () => clearInterval(scrollInterval);
//   }, [autoScroll]);

//   const handleManualScroll = (direction) => {
//     setAutoScroll(false);
//     if (carouselRef.current) {
//       const scrollAmount =
//         direction === 'left'
//           ? -carouselRef.current.clientWidth / 3
//           : carouselRef.current.clientWidth / 3;
//       carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   const handleMouseDown = () => {
//     setIsMouseDown(true);
//     setAutoScroll(false);
//   };

//   const handleMouseUp = () => {
//     setIsMouseDown(false);
//     setAutoScroll(true);
//   };

//   return (
//     <div className="relative">
//       {/* Fade effect */}
//       <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
//       <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

//       {/* Carousel container */}
//       <div
//         ref={carouselRef}
//         className="overflow-x-hidden flex p-5 hide_scrollbar scroll-smooth"
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleMouseUp}
//         onTouchStart={handleMouseDown}
//         onTouchEnd={handleMouseUp}
//       >
//         {Feedbacks.map((feedback, index) => (
//           <div className="flex-shrink-0 w-full mr-14 items-center md:w-1/3 sm:w-full" key={index}>
//             <FeedbackCard
//               studentName={feedback.studentName}
//               alumniName={feedback.alumniName}
//               comment={feedback.comment}
//               image_url={feedback.image_url}
//               rating={feedback.rating}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FeedbackCarousel;

import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import { FaArrowRight } from 'react-icons/fa6';

function FeedbackCarousel() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [animationConfig] = useState(config.gentle);
  const [carouselSlides, setCarouselSlides] = useState([]);

  const carouselRef = useRef(null);
  const autoplayRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);

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

  useEffect(() => {
    const fetchData = async () => {
      // fetch data;

      // Map the response data to carousel slides format
      const mappedSlides = Feedbacks.map((item, index) => ({
        key: index,
        content: (
          <div className="flex flex-col justify-between text-white bg-gradient-to-b from-purple-950 to-purple-500 items-center py-7 sm:px-4 h-60 sm:h-[490px] w-60 sm:w-96 rounded-2xl sm:rounded-3xl shadow-xl">
            {/* Alumni image and name */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white overflow-hidden border border-white mb-2">
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  src={item.image_url}
                  alt={item.alumniName}
                />
              </div>
              <p className="text-center text-lg sm:text-3xl font-medium sm:mb-4">
                {item.alumniName}
              </p>
            </div>

            {/* Comment/message area */}
            <div className="flex-grow flex items-center">
              <p className="text-center px-2 italic text-xs sm:text-lg">
                "{item.comment}"
              </p>
            </div>

            {/* Student name and rating at the bottom */}
            <div className="w-full flex flex-col pr-5">
              <p className="font-thin text-sm sm:text-xl text-end mt-3">
                - {item.studentName}
              </p>
              <div className="text-center mt-3">
                {Array(item.rating)
                  .fill(0)
                  .map((_, index) => (
                    <span
                      key={index}
                      className="text-yellow-500 text-xs sm:text-xl"
                    >
                      ⭐
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ),
      }));

      setCarouselSlides(mappedSlides);
    };

    fetchData();
  }, []);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const currentPosition = e.clientX;
      const diff = startPosition - currentPosition;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          //Swiped left, move to next slide or loop to first slid
          setGoToSlide((prev) =>
            prev < carouselSlides.length - 1 ? prev + 1 : 0,
          );
        } else {
          //Swiped right, move to preious slide or loop to last slide
          setGoToSlide((prev) =>
            prev > 0 ? prev - 1 : carouselSlides.length - 1,
          );
        }
        setDragging(false); //Reset dragging state
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const startAutoplay = () => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(() => {
        setGoToSlide((prev) =>
          prev < carouselSlides.length - 1 ? prev + 1 : 0,
        );
      }, 3000); // change slide every 3 second
    }
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const handleTouchOutside = (e) => {
    if (e.target !== carouselRef.current) {
      startAutoplay();
    }
  };

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchOutside);
    startAutoplay();
    return () => {
      stopAutoplay();
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [carouselSlides.length]);

  return (
    <div
      className="select-none w-[90%] sm:w-[95%] h-[300px] mx-auto sm:my-28"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={(e) => setStartPosition(e.touches[0].clientX)}
      onTouchMove={(e) => {
        const currentPosition = e.touches[0].clientX;
        const diff = startPosition - currentPosition;
        if (Math.abs(diff) > 5) {
          if (diff > 0) {
            // Swiped left, move to next slide or loop to first slide
            setGoToSlide((prev) =>
              prev < carouselSlides.length - 1 ? prev + 1 : 0,
            );
          } else {
            // Swiped right, move to previous slide or loop to last slide
            setGoToSlide((prev) =>
              prev > 0 ? prev - 1 : carouselSlides.length - 1,
            );
          }
          setDragging(false); // Reset dragging state
        }
      }}
      onTouchEnd={() => setDragging(false)}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <Carousel
        ref={carouselRef}
        slides={carouselSlides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        animationConfig={animationConfig}
      />
      <div className=" w-1/2 mx-auto mt-5 md:-mt-14 lg:mt-32 flex justify-center">
        <div className="text-white">
          <button
            className=" text-3xl font-bold text-blue-800"
            onClick={() =>
              setGoToSlide((prev) =>
                prev < carouselSlides.length - 1 ? prev + 1 : 0,
              )
            }
          >
            Scroll <FaArrowRight className=" inline" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCarousel;
