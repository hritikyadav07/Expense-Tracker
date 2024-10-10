import React from 'react';

const Signup = ({ onSwitch }) => {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center p-8 transition-all duration-700">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" className="mb-4 p-2 w-full" />
        <input type="email" placeholder="Email" className="mb-4 p-2 w-full" />
        <input type="password" placeholder="Password" className="mb-4 p-2 w-full" />
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Sign Up</button>
      </form>
      <p className="mt-4">Already have an account? 
        <button onClick={onSwitch} className="text-green-500 ml-1">Login</button>
      </p>
    </div>
  );
};

export default Signup;
