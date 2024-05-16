import React from 'react';
import '../css/shipmentinfo.css';
import download from '../utils/download.png'
import ShipmentDetails from './ShipmentDetails';
import down from '../utils/arrowdown.png'
import left from '../utils/arrowleft.png'
import right from '../utils/arrowright.png'

const ShipmentInfo = () => {
  return (
    <div className='shipmentinfo'>
      <div className='fr672s'>
        <div className='fr672simg'>
            <img src={download} alt='download'/>
        </div>
        <strong className='fr672sdown'>Download</strong>
      </div>
      <ShipmentDetails/>

      <div className='shipscrlbtn'>
          <div className='rect161'>
          <div className='rect162'/>
          </div>
      </div>

      <div className='frame669'>
        <div className='fr677'>
          <div className='fr642'>
            <strong className='fr642txt'>
              10
            </strong>
            <div className='fr642img'>
              <img src={down} alt='down'/>
            </div>

          </div>
          <strong className='fr677txt'>
          1-10 of 100
          </strong>

        </div>
        <div className='fr498'>
            <div className='fr498imgleft'>
              <img src={left} alt='down'/>
            </div>
            <div className='frame497'>
              <div className='fr491'>
                <strong className='fr491txt'>1</strong>
              </div>
              <div className='fr492'>
                <strong className='fr492txt'>2</strong>
              </div>
              <div className='fr492'>
                <strong className='fr492txt'>2</strong>
              </div>
              <div className='fr492'>
                <strong className='fr492txt'>...</strong>
              </div>
              <div className='fr492'>
                <strong className='fr492txt'>10</strong>
              </div>

            </div>
            <div className='fr498imgleft'>
              <img src={right} alt='down'/>
            </div>

        </div>


      </div>

    </div>
  )
}

export default ShipmentInfo;