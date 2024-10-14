import React from 'react';
import MaxwidthXXL from '../../ScreenSizes/MaxwidthXXL';
import mentoring from '../../assets/images/mentoring.png';

function ArticleSection() {
  return (
    <div>
      <MaxwidthXXL>
        <div className="bg-purple-300 p-6 sm:p-10 md:px-14 rounded-tl-[50px] md:rounded-tl-[100px] rounded-br-[50px] md:rounded-br-[100px] shadow-md border">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2 mt-5 text-center text-purple-950">
            Welcome to <span className='text-blue-700'>AlumniBuzz!</span>
          </h3>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 sm:gap-10">
            <p className="w-full md:w-2/3 text-base sm:text-lg md:text-xl">
              Unlock a world of opportunities with AlumniBuzz, where students and alumni come together to share knowledge, experiences, and guidance. Whether you're looking to seek advice for your career journey or want to mentor the next generation, our platform is designed to make meaningful connections. Join us in creating a vibrant community where your aspirations are supported by those who have been there before.
            </p>
            <div className="w-full md:w-1/3">
              <img src={mentoring} alt="mentoring" className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 mx-auto md:mx-0" />
            </div>
          </div>
        </div>
      </MaxwidthXXL>
    </div>
  );
}

export default ArticleSection;
