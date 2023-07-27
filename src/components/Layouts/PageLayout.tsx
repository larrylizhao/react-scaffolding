import React, { type ReactElement } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AuthStatus from '../common/AuthStatus';

const PageLayout = (): ReactElement => {
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
