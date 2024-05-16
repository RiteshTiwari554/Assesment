import React from 'react';
import '../css/analytics.css';
import red from '../utils/redarrow.png';
import Milestones from './Milestones';
import MileStoneInfo from './MileStoneInfo';
import MileStoneInfo2 from './MileStoneinfo2';
import ShipmentInfo from './ShipmentInfo';

const Analytics = () => {
  return (
    <div className="analytics">
      <div className='analyticsnav'>
        <div className='frame670a'>
           <strong className='frame670atxt'>Type</strong>
           <div className='frame641a'>
              <strong className='frame641atxt'>Select</strong>
              <img src={red} className='frame641aimg' alt='frame641aimg'/>
           </div>
        </div>
        <div className='frame670a'>
           <strong className='frame670atxt'>Date</strong>
           <div className='frame641a'>
              <strong className='frame641atxt'>Select</strong>
              <img src={red} className='frame641aimg' alt='frame641aimg'/>
           </div>
        </div>
        <div className='frame670a'>
           <strong className='frame670atxt'>Period</strong>
           <div className='frame641a'>
              <strong className='frame641atxt'>Select</strong>
              <img src={red} className='frame641aimg' alt='frame641aimg'/>
           </div>
        </div>

        <div className='frame675a'>
          <div className='frame4a'>
            <strong className='frame4atxt'>Cancel</strong>
          </div>
          <div className='frame672a'>
          <strong className='frame672atxt'>Go</strong>
          </div>


        </div>

      </div>
      <Milestones/>
      <MileStoneInfo/>
      <MileStoneInfo2/>
      <ShipmentInfo/>

    </div>
  );
};

export default Analytics;