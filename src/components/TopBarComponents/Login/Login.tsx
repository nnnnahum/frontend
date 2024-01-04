import React from 'react';
import './Login.css';

const defaultProps = {
  label: 'Log In',
};

const Login = (props:any) => {
  return (
    <span >
    <button className="login">
      {props.label ?? defaultProps.label}
    </button>
    </span>
  );
};

export default Login;