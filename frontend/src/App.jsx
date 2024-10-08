import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import store from './store/store'; // Import your Redux store
import DashboardHome from './components/DashBoard/DashboardHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Home is accessible to all users
  },
  {
    path: 'dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard /> {/* Dashboard is protected and requires authentication */}
      </ProtectedRoute>
    ),
    children: [
      { path: '', element: <DashboardHome /> }, // Default route for Dashboard
      // { path: 'settings', element: <Settings /> },
      // { path: 'profile', element: <Profile /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
