import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export const Body = () => {     // named export 
  return (
    <div className='flex'>
      <Sidebar/> 
      <Outlet /> 
    </div>
  )
}

export default Body;      // default export 