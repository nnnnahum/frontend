import React from 'react';
import './CreateTapeLibrary.css';

const defaultProps = {
  label: 'Create A Tape Library'
};

const CreateTapeLibrary = (props:any) => {
  return (
    <button className="create-tape-library-button">
      <span className="create-tape-library-button">{props.label ?? defaultProps.label}</span>      
    </button>
  );
};

export default CreateTapeLibrary;