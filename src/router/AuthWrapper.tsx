import React, { type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import type { RootState } from '../redux/store';

const AuthWrapper = ({ children }: { children: JSX.Element }): ReactElement => {
  const user = useSelector((state: RootState) => state.user);

  const location = useLocation();

  if (user.name === '') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthWrapper;
