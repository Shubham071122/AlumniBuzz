import React from 'react';
import MaxwidthXXL from '../../ScreenSizes/MaxwidthXXL';
import mentoring from '../../assets/images/mentoring.png';

function ArticleSection() {
  return (
    <div>
      <MaxwidthXXL>
        <div className="bg-purple-300 p-10 px-14 rounded-full shadow-xl">
          <h3 className="text-4xl font-bold py-2 mt-5 text-center">
            Welcome to AlumniBuzz!
          </h3>
          <div className="flex items-center justify-between gap-10">
            <p className="w-2/3 text-xl ">
              Unlock a world of opportunities with AlumniBuzz, where students
              and alumni come together to share knowledge, experiences, and
              guidance. Whether you're looking to seek advice for your career
              journey or want to mentor the next generation, our platform is
              designed to make meaningful connections. Join us in creating a
              vibrant community where your aspirations are supported by those
              who have been there before.
            </p>
            <div className="w-1/3">
              <img src={mentoring} alt="mentoring" className="w-80 h-80" />
            </div>
          </div>
        </div>
      </MaxwidthXXL>
    </div>
  );
}

export default ArticleSection;
