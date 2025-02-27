import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='flex flex-col gap-6'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout