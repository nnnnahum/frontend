import React from 'react';
import './Section.css';

const Section = (props:any) => {
    return (
      <div className="section">
        {props.text} 
      </div>
    );
  };
  
  export default Section;