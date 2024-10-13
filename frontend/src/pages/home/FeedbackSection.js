import React, {useRef} from 'react';
import MaxwidthXL from '../../ScreenSizes/MaxwidthXL';
import FeedbackCarousel from '../../components/feedback/FeedbackCarousel';

function FeedbackSection() {
  const carouselRef = useRef(null);

  return (
    <>
      <MaxwidthXL>
        <div className="mt-5">
          <h3 className="text-2xl">⭐⭐⭐⭐⭐</h3>
          <h3 className="text-3xl font-bold py-2">The Essence of Quality</h3>
          <p className="text-md">More than a million students gave 5 stars to their mentor.</p>
        </div>
        <div className="relative">
          <FeedbackCarousel />
        </div>
      </MaxwidthXL>
    </>
  );
}

export default FeedbackSection;
