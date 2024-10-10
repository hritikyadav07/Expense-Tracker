// src/components/Footer.js
import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
          <div className="flex w-full sm:w-auto">
            <input
              type="email"
              placeholder="Input your email"
              className="w-full sm:w-auto px-4 py-2 text-black rounded-l-lg outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-lg w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <Logo/>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center space-x-5">
            <a href="/" className="text-gray-400 hover:text-white">Pricing</a>
            <a href="#about" className="text-gray-400 hover:text-white">About us</a>
            <a href="/" className="text-gray-400 hover:text-white">Features</a>
            <a href="/" className="text-gray-400 hover:text-white">Help Center</a>
            <a href="/" className="text-gray-400 hover:text-white">Contact us</a>
            <a href="/" className="text-gray-400 hover:text-white">FAQs</a>
            <a href="/" className="text-gray-400 hover:text-white">Careers</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 mt-6">
          {/* Legal Links */}
          <div className="flex space-x-4 text-gray-400 text-sm">
            <p>© 2024 Brand, Inc.</p>
            <a href="/" className="hover:text-white">Privacy</a>
            <a href="/" className="hover:text-white">Terms</a>
            <a href="/" className="hover:text-white">Sitemap</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
