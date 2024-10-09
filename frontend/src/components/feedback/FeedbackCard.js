import React from 'react';

function FeedbackCard({ studentName, alumniName, comment, image_url, rating }) {
  return (
    <div className="border shadow-lg rounded-lg p-5 w-full min-w-[400px] bg-white h-80">
      <img src={image_url} alt={alumniName} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-semibold text-center mb-2">{alumniName}</h3>
      <p className="text-gray-600 text-center mb-2">Student: {studentName}</p>
      <p className="text-center text-gray-700 italic">"{comment}"</p>
      <div className="text-center mt-4">
        {Array(rating)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500">⭐</span>
          ))}
      </div>
    </div>
  );
}

export default FeedbackCard;
