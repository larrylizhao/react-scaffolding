import React, { type ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import { logout } from '../../redux/reducers/userSlice';

const AuthStatus = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (user.name === '') {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {user.name}!
      <button
        onClick={() => {
          dispatch(logout());
          navigate('/');
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default AuthStatus;
