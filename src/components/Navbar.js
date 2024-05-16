import React from 'react'
import '../css/navbar.css';
import arrowdown from '../utils/arrowdown.png';
import notify from '../utils/notifications.png';
import profile from '../utils/profile.png';
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='navtitle'>
            <h3 >Dashboard</h3>
        </div>
        <div className='navrightcontainer'>
            <div className='contleftsec'>
                <div className='grp266'>
                    <div className='ellipse7'/>
                    <div className='notificationsec'>
                            <img src= {notify}className="notify" alt ="notify"/>
                    </div>
                </div>
                <div className='frame592'>
                        <div className='grp267'>
                            <div className='ellipse6'/>
                            <img src={profile} alt='profile'/>
                        </div>
                        <div className='frame303'>
                            <h3 className='font name'>Edward William</h3>
                            <h3 className='font post'>Admin</h3>
                        </div>
                </div>
            </div>
            <div className='contrightsec'>
                    <img  src = {arrowdown} className='arrdwn' alt='arrowdown'/>
            </div>

        </div>
      <div className='line'/>
    </div>
  )
}

export default Navbar