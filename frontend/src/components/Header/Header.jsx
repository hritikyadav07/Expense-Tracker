import React from 'react'
import Logo from '../Logo'

function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-6 bg-gray-100">
        {/* Logo */}
        <Logo />
        
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-orange-600 ">Home</a></li>
          <li><a href="#about" className="hover:text-orange-600">About us</a></li>
          <li><a href="#services" className="hover:text-orange-600">Services</a></li>
          <li><a href="#portfolio" className="hover:text-orange-600">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact Us</a></li>
        </ul>

        {/* Login Button */}
        <button className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
          Login
        </button>
      </nav>
    </header>
  )
}

export default Header
