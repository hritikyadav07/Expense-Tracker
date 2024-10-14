import React from 'react';

const Login = ({ onSwitch }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Log in to Expense Tracker</h2>
        <p className="text-gray-500 text-center mb-6">Manage your expenses effortlessly</p>

        <form className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
          />

          {/* Continue with Email Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-yellow-600 rounded hover:bg-yellow-500 transition duration-200"
          >
            Continue with Email
          </button>

          {/* Create Account Button */}
          <button
            type="button"
            onClick={onSwitch}
            className="w-full py-2 text-yellow-600 border border-yellow-600 rounded hover:bg-yellow-100 transition duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Social Login Options */}
        <div className="flex justify-center space-x-4 mt-6">
          {/* Replace these divs with actual icons */}
          <div className="w-10 h-10 bg-black rounded-full">
            <img src="/path-to-your-icon1.png" alt="Social Login" className="w-full h-full" />
          </div>
          <div className="w-10 h-10 bg-black rounded-full">
            <img src="/path-to-your-icon2.png" alt="Social Login" className="w-full h-full" />
          </div>
          <div className="w-10 h-10 bg-black rounded-full">
            <img src="/path-to-your-icon3.png" alt="Social Login" className="w-full h-full" />
          </div>
        </div>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <a href="/forgot-password" className="text-yellow-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
