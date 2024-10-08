// src/components/Dashboard.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Header from './Header';// different header 
// import Footer from './Footer'; // different footer

const Dashboard = () => {
  return (
    <div>
      {/* <Header isDashboard={true} /> */}
      <div style={{ display: 'flex' }}>
        <nav>
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>
            <li><Link to="/dashboard/profile">Profile</Link></li>
          </ul>
        </nav>
        <main style={{ flexGrow: 1 }}>
          <Outlet /> {/* Renders the child route component */}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
