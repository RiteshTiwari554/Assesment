import React from 'react'
import png1 from '../utils/png1.png';
import png2 from '../utils/png2.png';
import png3 from '../utils/png3.png';
import png4 from '../utils/png4.png';

const BookingStatistics = () => {
    const totalBookings = 501;
  
    return (
      <div className='bookingstatics'>
        <div className='bookingbox'>
            <div className='frame662'>
                <div className='frame661'>
                    <strong className='font frame661txt1'>Total Bookings:</strong> 
                    <strong className='font frame661txt2'>{totalBookings} Bookings</strong> 
                </div>
                <div className='frame316'>
                    <img src={png1} alt='png' className='frame316png'/>
                </div>
         
            </div>
        </div>
        <div className='bookingbox'>
            <div className='frame662'>
                <div className='frame661'>
                    <strong className='font frame661txt1'>Total Bookings:</strong> 
                    <strong className='font frame661txt2'>{totalBookings} Bookings</strong> 
                </div>
                <div className='frame316'>
                    <img src={png2} alt='png' className='frame316png'/>
                </div>
            </div>
        </div>
        <div className='bookingbox'>
            <div className='frame662'>
                <div className='frame661'>
                    <strong className='font frame661txt1'>Total Bookings:</strong> 
                    <strong className='font frame661txt2'>0 Bookings</strong> 
                </div>
                <div className='frame316'>
                    <img src={png3} alt='png' className='frame316png'/>
                </div>
            </div>
        </div>
        <div className='bookingbox'>
            <div className='frame662'>
                <div className='frame661'>
                    <strong className='font frame661txt1'>Total Bookings:</strong> 
                    <strong className='font frame661txt2'>100%</strong> 
                </div>
                <div className='frame316'>
                    <img src={png4} alt='png' className='frame316png'/>
                </div>
            </div>
        </div>
      </div>
    );
  };

export default BookingStatistics