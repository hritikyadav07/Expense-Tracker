import React from 'react';
import { Link } from 'react-router-dom';
import Render from '../components/DashBoard/Render';
import Header from '../components/DashBoard/DashboardHeader';
import Menu from '../components/DashBoard/Menu';
// import Footer from './Footer'; // different footer

const Dashboard = () => {
  return (
    <div className='m-4'>
      <Header isDashboard={true} />
      <div className='grid grid-cols-12'>
        <Menu/>
        {/* <nav className='col-span-2 my-8 px-4 py-2  text-2xl h-auto'>
          <ul className='space-y-3'>
            <li className='px-5 py-2 bg-yellow-500 text-white rounded-md'><Link to="/dashboard">Dashboard</Link></li>
            <li className='px-5 py-2 bg-yellow-500 text-white rounded-md'><Link to="/dashboard/transactions">Transactions</Link></li>
            <li className='px-5 py-2 bg-yellow-500 text-white rounded-md'><Link to="/dashboard/analytics">Analytics</Link></li>
            <li className='px-5 py-2 bg-yellow-500 text-white rounded-md'><Link to="/dashboard/investments">Investments</Link></li>
            <li className='px-5 py-2 bg-yellow-500 text-white rounded-md'><Link to="/dashboard/savings">Savings</Link></li>
            <li className='px-5 py-2 bg-yellow-500 text-white rounded-md'><Link to="/dashboard/expenses">Expenses</Link></li>
            <li className='px-5 py-2 bg-yellow-500 text-white rounded-md'><Link to="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav> */}
        <main className='col-span-10 my-8'>
          <Render/> {/* Renders the child route component */}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
