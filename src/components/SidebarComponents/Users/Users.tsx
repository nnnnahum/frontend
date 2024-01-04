import React from 'react';
import './Users.css';
import Section from '../Section/Section';

const defaultProps = {
  text: 'Users',
};

const Users = (props:any) => {

  return (
    <div>
        <ul>
            <Section text="Team" logo="T" />
            <Section text="Organization" logo="O" />
            <Section text="Support" logo="S" />
        </ul>
    </div>
  );
};

export default Users;