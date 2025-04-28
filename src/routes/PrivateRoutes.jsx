import React, { use } from 'react';
import { AuthContext } from '../providers/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spiner from '../components/ui/Spiner';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) return <Spiner />;
  if (!user) return <Navigate state={location?.pathname} to="/signin" />;

  return children;
};

export default PrivateRoutes;
