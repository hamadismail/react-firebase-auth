import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvides = ({ children }) => {
  const userInfo = {
    name: 'Hamad',
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvides;
