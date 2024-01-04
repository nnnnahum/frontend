import React from 'react';
import LandingPageText from './LandingPageComponents/LandingPageText/LandingPageText';
import LandingPagePic from './LandingPageComponents/LandingPagePic/LandingPagePic';

const LandingPage = (props:any) => {
  return (
     <span className="landing-page">
        <LandingPageText />
        <LandingPagePic />
    </span>
  );
};

export default LandingPage;