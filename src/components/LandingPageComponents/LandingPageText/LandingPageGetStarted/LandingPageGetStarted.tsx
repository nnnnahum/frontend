import React from 'react';
import './LandingPageGetStarted.css';

const defaultProps = {
  label: 'Get Started',
};

const Button = (props:any) => {
  return (
    <button className="landing-page-get-started">
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;