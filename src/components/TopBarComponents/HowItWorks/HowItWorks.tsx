import React from 'react';
import './HowItWorks.css';

const defaultProps = {
  text: 'How It Works',
};

const HowItWorks = (props:any) => {
  return (
    <span className="how-it-works">
      {props.text ?? defaultProps.text}
    </span>
  );
};

export default HowItWorks;