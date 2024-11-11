import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // Fetch logged-in user from localStorage on component mount
  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user);
  }, []);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User logged out successfully');
    setLoggedInUser(null);
    setTimeout(() => {
      navigate('/auth?type=login');
    }, 1000);
  };

  // Handle navigation to login
  const handleLogin = () => {
    navigate('/auth?type=login');
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-6 bg-gray-100 shadow-lg">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-xl text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-orange-600">Home</a></li>
          <li><a href="#about" className="hover:text-orange-600">About Us</a></li>
          <li><a href="#services" className="hover:text-orange-600">Services</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact Us</a></li>
        </ul>

        {/* User Login/Logout Display */}
        <div className="flex items-center space-x-4">
          {loggedInUser ? (
            <>
              <h1 className="text-gray-700 text-lg font-semibold">{loggedInUser}</h1>
              <button
                onClick={handleLogout}
                className="bg-gray-300 text-gray-600 text-lg py-2 px-6 rounded hover:bg-yellow-600 hover:text-white transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-yellow-600 text-white text-lg py-2 px-6 rounded hover:bg-yellow-500 transition duration-200"
            >
              Login
            </button>
          )}
        </div>
      </nav>
      <ToastContainer />
    </header>
  );
}

export default Header;
