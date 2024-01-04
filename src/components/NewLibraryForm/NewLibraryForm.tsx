
import React, { useState } from 'react';
import './NewLibraryForm.css';

const NewLibraryForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    // You can perform further actions with the submitted value here
  };

  return (
    <form onSubmit={handleSubmit} className="new-library-form">
      <label>
        <div className="new-library-form">Datacenter</div>
        <select value={selectedOption} onChange={handleSelectChange} className="new-library-form-selector">
          <option value="">Select...</option>
          <option value="option1">us-west</option>
          <option value="option2">us-east</option>
          <option value="option3">uk-london</option>
        </select>
        <div className="new-library-form">Cloud Tape Library Name</div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter name"
          className="new-library-form-name"
        />
      </label>
      <div className="new-library-form">TBs of Data</div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter TBs"
          className="new-library-form-name"
        />
        <div>
            <button className="new-library-form-submit" type="submit">Create Cloud Tape Library</button> 
        </div>
    </form>
  );
};

export default NewLibraryForm;