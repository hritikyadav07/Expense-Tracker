import React from 'react'
import Logo from '../Logo'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth?type=login');
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-6 bg-gray-100">
        {/* Logo */}
        <Logo />
        
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-xl text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-orange-600 ">Home</a></li>
          <li><a href="#about" className="hover:text-orange-600">About us</a></li>
          <li><a href="#services" className="hover:text-orange-600">Services</a></li>
          {/* <li><a href="#portfolio" className="hover:text-orange-600">Portfolio</a></li> */}
          <li><a href="#contact" className="hover:text-orange-600">Contact Us</a></li>
        </ul>

        {/* Login Button */}
        <button onClick={handleLoginClick} className=" bg-gray-300 text-grey-600 text-xl py-2 px-8 rounded hover:bg-yellow-600 hover:text-white">
          Login  {/* Adjust "/auth" to your actual route */}
        </button>
      </nav>
    </header>
  )
}

export default Header
