import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardHome from './components/DashBoard/DashboardHome';
import LoginSignup from './pages/LoginSignup';
import { Provider, useDispatch, useSelector } from 'react-redux';  // Move dispatch and selector hooks inside provider
import store from './store/store';
import { loadUser } from './store/features/auth/authSlice';

const AppContent = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser()); // Load the user data on app start
  }, [dispatch]);

  // Adjust the router based on the authentication state
  const router = createBrowserRouter([
    {
      path: '/',
      element: isAuthenticated ? <Dashboard /> : <Home />, // Conditional rendering
      children: isAuthenticated
        ? [
            { 
              path: '',
               element: <DashboardHome />
            }, // Dashboard Home route
          ]
        : [],
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
