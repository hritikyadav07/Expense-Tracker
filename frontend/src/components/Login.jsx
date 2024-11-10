import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Login = ({ onSwitch }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false); // Local loading state
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError('All fields are required');
    }

    setLoading(true); // Set loading state to true before API call
    try {
      const url = "http://localhost:9000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        handleSuccess(result.message || 'Login Successful');
        localStorage.setItem('token', result.jwtToken);
        console.log(result);
        localStorage.setItem('loggedInUser', result.fname);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        const errorMessage = result.error || 'Login failed. Please check your credentials.';
        handleError(errorMessage); // Show toast with error message
      }
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false); // Set loading state to false after API call
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Log in to Expense Tracker</h2>
        <p className="text-gray-500 text-center mb-6">Manage your expenses effortlessly</p>

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-yellow-600 rounded hover:bg-yellow-500 transition duration-200"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging in...' : 'Continue with Email'}
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
      <ToastContainer/>
    </div>
  );
};

export default Login;
