import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full h-24 bg-gray-800 flex items-center px-8">
    
        <div className="cursor-pointer">
            <Link to='/'>
            <h1 className="font-bold text-4xl text-blue-600 select-none">
            Movie Web
          </h1>
            </Link>
          
        </div>
      </nav>
  )
}

export default Navbar