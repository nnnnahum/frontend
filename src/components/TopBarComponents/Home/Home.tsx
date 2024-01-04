import React from 'react';
import './Home.css';

const defaultProps = {
  text: 'Home',
};

const Home = (props:any) => {
  return (
    <span className="home">
      {props.text ?? defaultProps.text}
    </span>
  );
};

export default Home;