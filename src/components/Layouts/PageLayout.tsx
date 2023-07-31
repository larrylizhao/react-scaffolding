import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AuthStatus from '../common/AuthStatus';

/*
  Layouts might come from container app, keep this as a placeholder in case we also need one
 */
const PageLayout = () => {
  return (
    <div>
      <h1>Page Layout</h1>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default PageLayout;
