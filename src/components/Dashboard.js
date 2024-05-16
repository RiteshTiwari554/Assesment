import React from 'react';
import '../css/dashboard.css';
import Navbar from './Navbar';
import LeftPanel from './LeftPanel';
import DashboardPanel from './DashboardPanel';


const Dashboard = () => {
  return (
    <div className="dashboard">
        <Navbar/>
        <LeftPanel/>
        <div className='outletbox'>
          <DashboardPanel />
        </div>

        <div className='sideline'>
          <div className='scrollbar'/>
          <div className='topscrollbar'/>

        </div>
    </div>
  );
};

export default Dashboard;