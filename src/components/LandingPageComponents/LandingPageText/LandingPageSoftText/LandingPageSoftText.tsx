import React from 'react';
import './LandingPageSoftText.css'

const defaultProps = {
    text: 'We offer secure and low cost cloud tape libraries with unlimited restores without any extra fees ',
  };
  
  const LandingingPageSoftText = (props:any) => {
    return (
      <div className="landing-page-soft-text">
        {defaultProps.text}
      </div>
    );
  };
  
  export default LandingingPageSoftText;
  
  