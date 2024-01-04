import React from 'react';
import './Sidebar.css';
import Overview from '../SidebarComponents/Overview/Overview';
import HomeButton from '../../components/HomeButton';
import Users from '../SidebarComponents/Users/Users';
import CreateTapeLibrary from '../CreateTapeLibrary/CreateTapeLibrary';
import BottomSidebar from '../SidebarComponents/BottomSidebar/BottomSidebar';

 const Sidebar = (props:any) => {

    return (
        <div className="sidebar">
            <HomeButton />
            <h2>Overview</h2>
            <Overview />
            <h2>Users</h2>
            <Users />
            <CreateTapeLibrary />
            <BottomSidebar />
        </div>
    );
};

export default Sidebar;
