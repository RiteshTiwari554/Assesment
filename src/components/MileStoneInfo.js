import React from 'react';
import '../css/milestoneinfo.css'
import Fr752 from './Fr752';

const MileStoneInfo = () => {
  return (
    <div className='milestoneinfo'>
        <div className='fr752'>
            <strong className='fr752txt'>Loading</strong>
            <Fr752/>
            <div className='fr752line'/>
        </div>
        <div className='fr752'>
            <strong className='fr752txt'>Discharge</strong>
            <Fr752/>
            <div className='fr752line'/>
        </div>
        <div className='fr752'>
            <strong className='fr752txt'>Delivery</strong>
            <Fr752/>
            <div className='fr752line'/>
        </div>

    </div>
  )
}

export default MileStoneInfo