// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardHome from './components/DashBoard/DashboardHome';
import LoginSignup from './pages/LoginSignup';
import { Provider, useDispatch, useSelector } from 'react-redux';  // Move dispatch and selector hooks inside provider
import store from './store/store';
// import { loadUser } from './store/features/auth/authSlice';
import Transactions from './components/DashBoard/Transactions';
import Analytics from './components/DashBoard/Analytics';
import Expenses from './components/DashBoard/Expenses';
import Investments from './components/DashBoard/Investments';
import Savings from './components/DashBoard/Savings';
import Settings from './components/DashBoard/Settings';
import Render from './components/DashBoard/Render';

const AppContent = () => {
  // const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(loadUser()); // Load the user data on app start
  // }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '',
      element: <Home />, // Conditional rendering based on authentication
    },
    {
      path:'dashboard',
      element: <Dashboard />, // Conditional rendering based on
      children: !isAuthenticated
        ?[
            {
              path: '',
              element: <Render/>,
              children: [
                { path: '', element: <DashboardHome /> },
                { path: 'transactions', element: <Transactions /> },
                { path: 'analytics', element: <Analytics /> },
                { path: 'expenses', element: <Expenses /> },
                { path: 'investments', element: <Investments /> },
                { path: 'savings', element: <Savings /> },
                { path: 'settings', element: <Settings /> },
              ]
            }
          ]
        : [], // Empty routes when not authenticated
    },
    {
      path: 'auth',
      element: <LoginSignup />, // Login/Signup route
    },
    {
      path: '*',
      element: <div>404 Not Found</div>, // Handle unknown routes
    },
  ]);

  return loading ? <div>Loading...</div> : <RouterProvider router={router} />;
};


const App = () => {
  return (
    <Provider store={store}>
      <AppContent /> {/* Wrap the app content in Provider so that hooks can access Redux store */}
    </Provider>
  );
};

export default App;
