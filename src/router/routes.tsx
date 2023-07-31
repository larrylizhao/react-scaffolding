import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '@Pages/Login';
import ProtectedPage from '@Pages/ProtectedPage';
import Dashboard from '@Pages/Dashboard';
import Posts from '@Pages/Posts';

const routes = createHashRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'protected',
    element: <ProtectedPage />
  },
  {
    path: 'posts',
    element: <Posts />
  }
]);

const AppRoute = () => {
  return <RouterProvider router={routes} />;
};

export default AppRoute;
