import React from 'react';
import './HomePage.css';
import HomeButton from '../../components/HomeButton';
import TopBar from '../../components/TopBar';
import LandingPage from '../../components/LandingPage';

function HomePage() {
  document.body.style.backgroundColor= "#181a1f";
  return (
    <div className="home-page">
      <div>
        <HomeButton/>
        <TopBar />
      </div>
      <span>
        <LandingPage />
      </span>
    </div>
    
  );
}

export default HomePage;
