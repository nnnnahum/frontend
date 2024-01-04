import React from 'react';
import './MainCreateLibrary.css';
import NewLibraryForm from '../NewLibraryForm/NewLibraryForm';

 const MainCreateLibrary = (props:any) => {

    return (
        <span style={{display:"inline-flex"}}>
            <div className="main-create-library">
                <h1>Create New Cloud Tape Library</h1>
                <NewLibraryForm />
            </div>
            <img style={{float:"right", display:"inline-block",  
            width:"45%", paddingRight:"50px", paddingTop:"50px"}} 
                src="/World.png"/>
        </span>
    
    );
};

export default MainCreateLibrary;
