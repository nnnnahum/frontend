import React from 'react';
import './CreateLibrary.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainCreateLibrary from '../../components/MainCreateLibrary/MainCreateLibrary';

function CreateLibrary() {
    document.body.style.backgroundColor= "#181a1f";

  return (
    <div className="create-library">
        <span>
            <Sidebar />
        </span>
        <MainCreateLibrary />

    </div>
    
  );
}

export default CreateLibrary;
