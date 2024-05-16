import React from 'react';
import '../css/milestones.css'
import grp from '../utils/grp290.png'
import grp1 from '../utils/grp291.png'

const Milestones = () => {
  return (
    <div className="milestones">
        <div className='milestonesbox'>
           <div className='frame939m'>
              <strong className='frame939mtxt'>Milestones</strong>
              <div className='frame641m'>
                <strong className='frame641mtxt'>IN-TRANSIT (463)</strong>
              </div>

           </div>
           <div className='frame773m'>
              <div className='grp290'>
                  <img src={grp}
                  className='grp290img' alt='grp290img'/>
              </div>
              <div className='frame780'>
                  <div className='frame326m'>
                      <div className='elli7'/>
                      <strong className='frame326txt'>BOOKED (19)</strong>
                  </div>
                  <div className='frame326m'>
                      <div className='elli7 elli8'/>
                      <strong className='frame326txt'>DISCHARGED (29)</strong>
                  </div>
                  <div className='frame326m'>
                      <div className=' elli7 elli9'/>
                      <strong className='frame326txt'>ARRIVED (22)</strong>
                  </div>
                  <div className='frame326m'>
                      <div className='elli7 elli10'/>
                      <strong className='frame326txt'>DELIVERED (393)</strong>
                  </div>
                  <div className='frame326m'>
                      <div className='elli7 elli11'/>
                      <strong className='frame326txt'>RETURNED (149)</strong>
                  </div>
              </div>
           </div>
        </div>
        <div className='milestonesbox'>
           <div className='frame939m'>
              <strong className='frame939mtxt'>Timelines</strong>
           </div>
           <div className='frame773m'>
              <div className='grp290'>
                  <img src={grp1}
                  className='grp290img' alt='grp290img'/>
              </div>
              <div className='frame780 fr326m '>
              <div className='frame326m'>
                      <div className='elli7 elli10'/>
                      <strong className='frame326txt'>ON TIME (681)</strong>
                  </div>
                  <div className='frame326m'>
                      <div className=' elli7 elli9'/>
                      <strong className='frame326txt'>LATE (1)</strong>
                  </div>
              </div>
           </div>
        </div>
    </div>
  );
};

export default Milestones;