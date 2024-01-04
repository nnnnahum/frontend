import React from 'react';
import Home from './TopBarComponents/Home/Home';
import Pricing from './TopBarComponents/Pricing/Pricinig';
import HowItWorks from './TopBarComponents/HowItWorks/HowItWorks';
import FAQ from './TopBarComponents/Faq/Faq';
import './TopBar.css';
import Login from './TopBarComponents/Login/Login';

const TopBar = (props:any) => {
  return (
     <span className="top-bar">
        <Home />
        <HowItWorks />
        <FAQ />
        <Pricing />
        <Login />
    </span>
  );
};

export default TopBar;