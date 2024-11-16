import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import SearchBar from '../../components/search/SearchBar';
import AlumniSection from './AlumniSection';
import './HomePage.css';
import FeedbackSection from './FeedbackSection';
import Footer from '../../components/footer/Footer';
import ArticleSection from './ArticleSection';
import Navbar3 from '../../components/navbar/Navbar3';

function HomePage() {
  return (
    <>
      <div className="w-full min-h-screen">
        <Navbar3 />
        <div className="w-full h-[50vh] sm:h-[70vh] flex flex-col items-center justify-start gap-5 hero-gradient rounded-b-[50px] sm:rounded-b-[87px] shadow-md p-5 sm:p-10 pt-8 sm:pt-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-black text-start sm:text-center">
            Find your mentor and <br></br>elevate your life.
          </h1>
          <SearchBar />
        </div>
          <AlumniSection/>
          <ArticleSection/>
          <FeedbackSection/>
          <Footer/>
      </div>
    </>
  );
}

export default HomePage;
