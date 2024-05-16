import React from 'react'
import '../css/leftpanel.css';
import frm from '../utils/frm.png';
import analytics from '../utils/analytics.png';
import archive from '../utils/archive.png';
import bookmark from '../utils/bookmark_manager.png';
import dashboard from '../utils/dashboard.png';
import arrowdown from '../utils/arrowwhite.png';
// import notifications from '../utils/notifications.png';
import history from '../utils/history.png';
import user from '../utils/user.png';
import RR from '../utils/RR.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const LeftPanel = () => {

    const [isDashboardClicked, setIsDashboardClicked] = useState(true);
    const [isAnalyticsClicked, setIsAnalyticsClicked] = useState(false);

    const handleDashboardClick = () => {
        setIsDashboardClicked(true);
        setIsAnalyticsClicked(false);
      };
    
    const handleAnalyticsClick = () => {
        setIsAnalyticsClicked(true);
        setIsDashboardClicked(false);
        
      };
  return (
    <div className='leftpanel'>
        <div className='grp296'>
            <div className='rectangle1'>
                <div className='frame590'>
                        <img src={frm} alt='frm'/>
                </div>
                <div className='frame643'>
                    <ul className='ullist'>
                       
                        <li 
                        className='frameli'
                        style={{background: isDashboardClicked ? 'rgba(255, 255, 255, 0.12)': 'none' }}>
                            <div className='licontent'>
                                <img src={dashboard} alt='dashboard' className='licontentimg'/>
                                <Link to = "/" >
                                <h3 
                                className='fontwhite'
                                onClick={handleDashboardClick}>Dashboard</h3>
                                </Link >
                            </div>
                        </li>
                        <li className='frameli'
                        style={{background: isAnalyticsClicked ? 'rgba(255, 255, 255, 0.12)': 'none' }}>
                            <div className='licontent'>
                                <img src={analytics} alt='dashboard' className='licontentimg'/>
                                <Link to ="/applayout">
                                <h3 
                                className='fontwhite'
                                onClick={handleAnalyticsClick}>Analytics</h3>
                                </Link>
                            </div>
                        </li>
                        <li className='frameli liRR'>
                            <div className='licontent'>
                                <img src={RR} alt='dashboard' className='licontentimg'/>
                                <h3 className='fontwhite'>Rate Request</h3>    
                            </div>
                            <div className='arrwhite'>
                                <img src={arrowdown} className='arrowwhite' alt='arrowdonw'/>
                            </div>
                        </li>
                        <li className='frameli liRR'>
                            <div className='licontent'>
                                <img src={bookmark} alt='dashboard' className='licontentimg'/>
                                <h3 className='fontwhite'>Quote</h3>
                            </div>
                            <div className='arrwhite'>
                                <img src={arrowdown} className='arrowwhite' alt='arrowdonw'/>
                            </div>
                        </li>
                        <li className='frameli'>
                            <div className='licontent'>
                                <img src={user} alt='dashboard' className='licontentimg'/>
                                <h3 className='fontwhite'>User List</h3>
                            </div>
                        </li>
                        <li className='frameli liRR'>
                            <div className='licontent'>
                            
                                <img src={archive} alt='dashboard' className='licontentimg'/>
                                <h3 className='fontwhite'>Archieve</h3>
                               
                            </div>
                            <div className='arrwhite'>
                                <img src={arrowdown} className='arrowwhite' alt='arrowdonw'/>
                            </div>
                        </li>
                        <li className='frameli'>
                            <div className='licontent'>
                                <img src={history} alt='dashboard' className='licontentimg'/>
                                <h3 className='fontwhite'>History</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='leftpaneline'/>
            </div>
        </div>


    </div>
  )
}

export default LeftPanel