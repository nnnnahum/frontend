import React from 'react';
import './Overview.css';
import Section from '../Section/Section';


const Overview = (props:any) => {

  return (
    <div>
        <ul>
            <Section text="Dashboard" logo="D" />
            <Section text="Logs" logo="L" />
            <Section text="Billing" logo="B" />
            <Section text="Trash Bin" logo="T" />
        </ul>
    </div>
  );
};

export default Overview;