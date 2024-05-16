import React from 'react';
import '../css/mpp.css';
import mpp from '../utils/mpp.png';
import red from '../utils/redarrow.png';
import orange from '../utils/orangearrow.png';
import green from '../utils/greenarrow.png';
import location from '../utils/location.png';
import ship from '../utils/ship.png';
import plane from '../utils/plane.png';
import truck from '../utils/truck.png';
import add from '../utils/add.png';
import remove from '../utils/remove.png';


const Mpp = () => {
  return (
    <div className='mpp'>
        <img src={mpp} className='mpppng' alt='mpppng' />
        <div className='frame441'>
            <strong className='frame441txt'>Last Milestones</strong>
            <img className='frame441png' src={red} alt='frame441png'/>
        </div>
        <img src={location} className='mpppng1' alt='mpppng' />
        <img src={orange} className='mpppng2' alt='mpppng' />
        <img src={orange} className='mpppng3' alt='mpppng' />
        <img src={orange} className='mpppng4' alt='mpppng' />
        <img src={green} className='mpppng5' alt='mpppng' />

        <div className='frame751'>
            <div className='shipbox ship1'>
                <img src={ship} alt='ship'/>
            </div>
            <div className='shipbox plane'>
                <img src={plane} alt='plane'/>
            </div>
            <div className='shipbox plane'>
                <img src={truck} alt='truck'/>
            </div>
        </div>

        <div className='frame272'>
            <div className='remove'>
                <img src={add} alt='add'/>
            </div>
            <div className='remove'>
                <img src={remove} alt='add'/>
            </div>
        </div>

    </div>
  )
}

export default Mpp;