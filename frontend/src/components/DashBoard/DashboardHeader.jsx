import React from 'react'
import Logo from '../Logo';
import { useDispatch,} from 'react-redux';
import { logout } from '../../store/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';



function DashboardHeader() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout  = async() =>{
    await dispatch(logout())
    setTimeout(() => navigate('/'), 1000);
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    //Add code for routing to login page
  }
  //Add code for expense popup and logout
  return (
    <div className='flex justify-between'>
    <Logo/>
    <div>
      <button className="text-white bg-blue-500 px-6 py-2 rounded-md mx-2">
        Add Expense
      </button>
      <button onClick={handleLogout} className='text-white bg-red-500 px-6 py-2 rounded-md'>
        Logout
      </button>
    </div>
    </div>
  )
}

export default DashboardHeader