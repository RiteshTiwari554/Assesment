import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftPanel from './components/LeftPanel';

const Script = () => {
  return (
    <div className='script'>
        <LeftPanel/>
         <Outlet/> 
    </div>
  )
}

export default Script;