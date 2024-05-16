import React from 'react';
import '../css/milestoneinfo.css'
import Fr752 from './Fr752';

const MileStoneInfo2 = () => {
  return (
    <div className='milestoneinfo'>
        <div className='fr752'>
            <strong className='fr752txt'>Shipper</strong>
            <Fr752/>
            <div className='fr752line'/>
        </div>
        <div className='fr752'>
            <strong className='fr752txt'>Consignee</strong>
            <Fr752/>
            <div className='fr752line'/>
        </div>
        <div className='fr752'>
            <strong className='fr752txt'>Carrier</strong>
            <Fr752/>
            <div className='fr752line'/>
        </div>

    </div>
  )
}

export default MileStoneInfo2;