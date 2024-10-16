import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/features/auth/authSlice';

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate(); // Use for redirection
  
  // Access the auth state
  const { loading, error } = useSelector((state) => state.auth);

  // Handle form submission
  const handleLoginEvent = (e) => {
    e.preventDefault();
    // Dispatch the login action, passing email and password
    dispatch(login(email, password));
  };

  // Redirect to the dashboard if login is successful
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Log in to Expense Tracker</h2>
        <p className="text-gray-500 text-center mb-6">Manage your expenses effortlessly</p>

        {/* Error message for invalid credentials */}
        {error && (
          <div className="text-red-500 text-center mb-4">
            {/* {error} Display the error message */}
            Invalid Credentials
          </div>
        )}

        <form className="space-y-4" onSubmit={handleLoginEvent}>
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />

          {/* Continue with Email Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-yellow-600 rounded hover:bg-yellow-500 transition duration-200"
            disabled={loading} // Disable button while logging in
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
