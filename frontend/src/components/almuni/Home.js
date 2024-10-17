import React from 'react';
import MaxwidthXL from '../../ScreenSizes/MaxwidthXL';
import { Link } from 'react-router-dom';

function Home() {
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
      studentName: 'Rahul Singh',
      alumniName: 'Vivek Kumar',
      comment: "Vivek's advice on improving technical skills was on point.",
      image_url:
        'https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg',
      rating: 3,
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
  ];
  return (
    <div className="w-full min-h-screen">
      <MaxwidthXL>
        <div className="w-full h-full overflow-y-auto flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-purple-800">
            Welcome, Shubham!
          </h1>
          <div className="w-full h-[0.4px] bg-gray-300 my-6"></div>

          {/* Next Meeting Section */}
          <div className="w-full">
            <p className="pb-3 pl-1 text-lg font-medium">Next Meeting</p>
            <div className="w-96 h-64 bg-red-300 border rounded-3xl p-4">
              <Link
                to="#"
                className="block w-full px-2 py-2 bg-gray-100 text-center rounded-md text-black font-medium hover:bg-gray-200 transition-colors"
              >
                Meet with Rohit at 1:00 PM
              </Link>
            </div>
          </div>

          {/* Upcoming Meetings Section */}
          <div className="w-full">
            <p className="pb-3 pl-1 text-lg font-medium">Upcoming Meetings</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Meeting Card 1 */}
              <div className="bg-gray-200 border rounded-3xl p-4 h-64 flex flex-col justify-between">
                <h3 className="text-xl font-semibold">Meet with Priya</h3>
                <p>Time: 2:00 PM</p>
                <Link
                  to="#"
                  className="block w-full px-2 py-2 bg-gray-400 text-white text-center rounded-md font-medium hover:bg-purple-500 transition-colors"
                >
                  View Details
                </Link>
              </div>

              {/* Meeting Card 2 */}
              <div className="bg-gray-200 border rounded-3xl p-4 h-64 flex flex-col justify-between">
                <h3 className="text-xl font-semibold">Meet with Arun</h3>
                <p>Time: 4:00 PM</p>
                <Link
                  to="#"
                  className="block w-full px-2 py-2 bg-gray-400 text-white text-center rounded-md font-medium hover:bg-purple-500 transition-colors"
                >
                  View Details
                </Link>
              </div>

              {/* Meeting Card 3 */}
              <div className="bg-gray-200 border rounded-3xl p-4 h-64 flex flex-col justify-between">
                <h3 className="text-xl font-semibold">Meet with Ayesha</h3>
                <p>Time: 5:30 PM</p>
                <Link
                  to="#"
                  className="block w-full px-2 py-2 bg-gray-400 text-white text-center rounded-md font-medium hover:bg-purple-500 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Feedback Section */}
          <div className="w-full">
            <p className="pt-12 text-2xl font-bold text-gray-950">
              Recent Feedbacks 💬
            </p>

            <div className="w-full h-[0.4px] bg-gray-300 mt-6 mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feedback Card 1 */}
              {Feedbacks.length > 0 ? (
                Feedbacks.map((feedback) => (
                  <div className="bg-yellow-100 border border-black rounded-3xl px-6 py-6 h-72 flex flex-col ">
                    <div className="w-full flex items-center gap-4">
                      <img
                        src={feedback.image_url}
                        alt="student img"
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">
                          {feedback.studentName}
                        </h3>
                        <p>
                          {Array(feedback.rating)
                            .fill(0)
                            .map((_, index) => (
                              <span key={index} className="text-yellow-500">
                                ⭐
                              </span>
                            ))}
                        </p>
                      </div>
                    </div>
                    <p className="flex-grow-0 mt-6 text-gray-600">- {feedback.comment}</p>
                  </div>
                ))
              ) : (
                <div>No Recent Feedback found!!</div>
              )}
            </div>
          </div>
        </div>
      </MaxwidthXL>
    </div>
  );
}

export default Home;
