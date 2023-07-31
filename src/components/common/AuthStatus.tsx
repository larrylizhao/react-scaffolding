import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '@Redux/store';
import { logout } from '@Redux/reducers';

const AuthStatus = () => {
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
