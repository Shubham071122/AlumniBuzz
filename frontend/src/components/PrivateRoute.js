import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Loader from './loader/Loader';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div ><Loader/></div>; 

  // return children;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
