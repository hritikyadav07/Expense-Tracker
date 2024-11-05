import React from 'react'
import Logo from '../Logo';
function DashboardHeader() {
  //Add code for expense popup and logout
  return (
    <div className='flex justify-between'>
    <Logo/>
    <div>
      <button className="text-white bg-blue-500 px-6 py-2 rounded-md mx-2">
        Add Expense
      </button>
      <button className='text-white bg-red-500 px-6 py-2 rounded-md'>
        Logout
      </button>
    </div>
    </div>
  )
}

export default DashboardHeader