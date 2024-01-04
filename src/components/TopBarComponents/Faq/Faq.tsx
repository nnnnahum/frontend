import React from 'react';
import './Faq.css';

const defaultProps = {
  text: 'FAQ',
};

const Faq = (props:any) => {
  return (
    <span className="faq">
      {props.text ?? defaultProps.text}
    </span>
  );
};

export default Faq;