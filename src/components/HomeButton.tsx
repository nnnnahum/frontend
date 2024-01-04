import React from 'react';
import './HomeButton.css';

const defaultProps = {
  text: 'Geyser Data',
};

const HomeButton = (props:any) => {
  return (
    <span className="home-button">
      {props.text ?? defaultProps.text}
    </span>
  );
};

export default HomeButton;