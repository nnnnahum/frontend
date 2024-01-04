import React from 'react';
import './RequestADemo.css';

const IconComponent = () => (
  <svg className="request-a-demo-icon"  viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none">
  </path>
  <path d="M8 5v14l11-7z">
  </path>
</svg>
);

const defaultProps = {
  label: 'Request a demo',
  IconComponent,
};

const Button = (props:any) => {
  return (
    <button className="request-a-demo-button">
    {
        <defaultProps.IconComponent />
    }
      <span className="request-a-demo-button">{props.label ?? defaultProps.label}</span>
      
    </button>
  );
};

export default Button;