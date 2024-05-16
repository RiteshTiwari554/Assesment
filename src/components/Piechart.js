import React from 'react'
import '../css/piechart.css';
import ship from '../utils/redship.png';
import plane from '../utils/plane.png';
import truck from '../utils/truck.png';
import el from '../utils/Ellipse15.png';
import pdf from '../utils/Pdf.png';
import not from '../utils/not.png';
const Piechart = () => {
  return (
    <div className='piecontainer'>

      <div className='pieanalysis'>
           <h3 className='piettl'>Pie Chart Analysis</h3>
           <div className='pienavbar'>
               <div className='pienav1 pieshiptxt'>
                    <img src={ship} alt='ship'/>
                    <strong className='pienav1txt'>Sea</strong>
               </div>
               <div className='pienav1'>
                    <img src={plane} alt='ship'/>
                    <strong className='pienav1txt'>Air</strong>
               </div>
               <div className='pienav1'>
                    <img src={truck} alt='ship'/>
                    <strong className='pienav1txt'>Land</strong>
               </div>
           </div>

           <div className='chartanalysis'>
        <div className='framechart'>
          <div className='framechartimg'>
              <img className='el' src={el} alt='el'/>
              <strong className='font eltitle'>Origin Part</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1'/>
            <strong className='loc'>NHAVA SHEVA, INDIA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point2'/>
            <strong className='loc'>HONG KONG, HONG KONG</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point3'/>
            <strong className='loc'>YANTIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point4'/>
            <strong className='loc'>DALIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point5'/>
            <strong className='loc'>LONDON GATEWAY PORT, UK</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point6'/>
            <strong className='loc'>OTHER</strong>
          </div>
        </div>
        <div className='framechart'>
          <div className='framechartimg'>
              <img className='el' src={el} alt='el'/>
              <strong className='font eltitle'>Destination Part</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1'/>
            <strong className='loc'>NHAVA SHEVA, INDIA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point2'/>
            <strong className='loc'>HONG KONG, HONG KONG</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point3'/>
            <strong className='loc'>YANTIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point4'/>
            <strong className='loc'>DALIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point5'/>
            <strong className='loc'>LONDON GATEWAY PORT, UK</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point6'/>
            <strong className='loc'>OTHER</strong>
          </div>
        </div>
        <div className='framechart'>
          <div className='framechartimg'>
              <img className='el' src={el} alt='el'/>
              <strong className='font eltitle'>Carrier</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1'/>
            <strong className='loc'>NHAVA SHEVA, INDIA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point2'/>
            <strong className='loc'>HONG KONG, HONG KONG</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point3'/>
            <strong className='loc'>YANTIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point4'/>
            <strong className='loc'>DALIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point5'/>
            <strong className='loc'>LONDON GATEWAY PORT, UK</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point6'/>
            <strong className='loc'>OTHER</strong>
          </div>
        </div>
        <div className='framechart'>
          <div className='framechartimg'>
              <img className='el' src={el} alt='el'/>
              <strong className='font eltitle'>Consignee or Shipper</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1'/>
            <strong className='loc'>NHAVA SHEVA, INDIA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point2'/>
            <strong className='loc'>HONG KONG, HONG KONG</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point3'/>
            <strong className='loc'>YANTIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point4'/>
            <strong className='loc'>DALIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point5'/>
            <strong className='loc'>LONDON GATEWAY PORT, UK</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point6'/>
            <strong className='loc'>OTHER</strong>
          </div>
        </div>
        <div className='framechart'>
          <div className='framechartimg'>
              <img className='el' src={el} alt='el'/>
              <strong className='font eltitle'>Milestones</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1'/>
            <strong className='loc'>NHAVA SHEVA, INDIA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point2'/>
            <strong className='loc'>HONG KONG, HONG KONG</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point3'/>
            <strong className='loc'>YANTIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point4'/>
            <strong className='loc'>DALIAN, CHINA</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point5'/>
            <strong className='loc'>LONDON GATEWAY PORT, UK</strong>
          </div>
          <div className='charlocdata'>
            <div className='point1 point6'/>
            <strong className='loc'>OTHER</strong>
          </div>
        </div>
           </div>
      </div>
      
      <div className='chartdocs'>
        <div className='leftchartdocs'>
          <strong className='leftttl'>
          Latest Documents
            </strong>
            <div className='listdocs'>
                <div className='frame784'>
                    <div className='frame785'>
                        <img src ={pdf} className='fr785Img' alt='fr785Img'/>
                        <div className='frame782'>
                            <strong className='font fr782ttl'>Packing List</strong>
                            <strong className='fr782desc'>Sea job document (IM159075)</strong>
                        </div>
                    </div>
                    <div className='frame783'>
                        <strong className='fontdate'>Nov,29, 2023</strong>
                        <strong className='fontdate'>10:27 AM</strong>
                        
                    </div>
                </div>
                <div className='linedocs'/>
            </div>
            <div className='listdocs'>
                <div className='frame784'>
                    <div className='frame785'>
                        <img src ={pdf} className='fr785Img' alt='fr785Img'/>
                        <div className='frame782'>
                            <strong className='font fr782ttl'>Commercial invoice</strong>
                            <strong className='fr782desc'>Sea job document (IM159075)</strong>
                        </div>
                    </div>
                    <div className='frame783'>
                        <strong className='fontdate'>Nov,29, 2023</strong>
                        <strong className='fontdate'>10:27 AM</strong>
                        
                    </div>
                </div>
                <div className='linedocs'/>
            </div>
            <div className='listdocs'>
                <div className='frame784'>
                    <div className='frame785'>
                        <img src ={pdf} className='fr785Img' alt='fr785Img'/>
                        <div className='frame782'>
                            <strong className='font fr782ttl'>Bill of Loading</strong>
                            <strong className='fr782desc'>Sea job document (IM159075)</strong>
                        </div>
                    </div>
                    <div className='frame783'>
                        <strong className='fontdate'>Nov,29, 2023</strong>
                        <strong className='fontdate'>10:27 AM</strong>
                        
                    </div>
                </div>
                <div className='linedocs'/>
            </div>
            <div className='listdocs'>
                <div className='frame784'>
                    <div className='frame785'>
                        <img src ={pdf} className='fr785Img' alt='fr785Img'/>
                        <div className='frame782'>
                            <strong className='font fr782ttl'>Packing List</strong>
                            <strong className='fr782desc'>Sea job document (IM159075)</strong>
                        </div>
                    </div>
                    <div className='frame783'>
                        <strong className='fontdate'>Nov,29, 2023</strong>
                        <strong className='fontdate'>10:27 AM</strong>
                        
                    </div>
                </div>
                <div className='linedocs'/>
            </div>
            <div className='leftsidelinebar'/>

        </div>
        <div className='rightchartdocs'>
          <strong className='leftttl rightttl'>Announcements</strong>
          <h3 className='rightdesc'>Soon you will see latest announcements/new in this section.</h3>
          <img src={not} className='notimg' alt='notimg'/>
          <div className='leftsidelinebar rightsidelinebar'/>
        </div>
      </div>

    
    </div>
  )
}

export default Piechart