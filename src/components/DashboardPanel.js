import React from 'react'
import '../css/dashboardpanel.css';
import BookingStatistics from './BookingStatistics';
import Mpp from './Mpp';
import Piechart from './Piechart';
const DashboardPanel = () => {
  return (
    <div className='dashboardpanel'>
        < BookingStatistics/>
        <Mpp />
        <Piechart/>

    </div>
  )
}

export default DashboardPanel