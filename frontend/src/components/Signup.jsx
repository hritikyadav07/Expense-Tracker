import React, { useState } from 'react';

const Signup = ({ onSwitch }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-top-5 mx-36"> {/* Center the form */}
      <div className="w-full bg-white py-5 px-16 rounded-lg shadow-lg mt-10"> {/* Increase the width and add margin-top */}
        <h2 className="text-2xl font-bold mb-2">Begin your journey</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">First name</label>
            <input
              type="text"
              placeholder="Input first name"
              className="w-full px-3 py-2 border rounded-md bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Last name</label>
            <input
              type="text"
              placeholder="Input last name"
              className="w-full px-3 py-2 border rounded-md bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="example.email@gmail.com"
              className="w-full px-3 py-2 border rounded-md bg-gray-100"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter at least 8+ characters"
              className="w-full px-3 py-2 border rounded-md bg-gray-100"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-gray-500 focus:outline-none"
            >
              {passwordVisible ? (
                <i className="fas fa-eye"></i> // Use FontAwesome eye icon
              ) : (
                <i className="fas fa-eye-slash"></i> // Use FontAwesome eye-slash icon
              )}
            </button>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-500">
              By signing up, I agree with the{' '}
              <a href="#" className="text-amber-600 underline">
                Terms of Use
              </a>{' '}
              &{' '}
              <a href="#" className="text-amber-600 underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
          >
            Register
          </button>
        </form>

        {/* Social login */}
        <div className="flex items-center justify-center my-4">
          <span className="border-t w-1/4"></span>
          <span className="text-gray-500 px-2">OR</span>
          <span className="border-t w-1/4"></span>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="p-2 border rounded-full">
            <i className="fab fa-google text-red-500"></i> {/* FontAwesome Google icon */}
          </button>
          <button className="p-2 border rounded-full">
            <i className="fab fa-facebook text-blue-600"></i> {/* FontAwesome Facebook icon */}
          </button>
          <button className="p-2 border rounded-full">
            <i className="fab fa-apple text-black"></i> {/* FontAwesome Apple icon */}
          </button>
        </div>

        {/* Link to login */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Returning user?{' '}
          <button className="text-amber-600 font-semibold hover:underline" onClick={onSwitch}>
            Log in here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
