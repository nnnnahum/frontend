import React from 'react';
import './Pricing.css';

const defaultProps = {
  text: 'Pricing',
};

const Pricing = (props:any) => {
  return (
    <span className="pricing">
      {props.text ?? defaultProps.text}
    </span>
  );
};

export default Pricing;