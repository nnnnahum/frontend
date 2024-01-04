import React from 'react';
import './BottomSidebar.css';

const BottomSidebar = (props:any) => {

  return (
    <div className="bottom-sidebar">
        <div>
            Storage: 43%
        </div>
        <button className="bottom-sidebar-button">
            Upgrade Storage
        </button>
    </div>
  );
};

export default BottomSidebar;