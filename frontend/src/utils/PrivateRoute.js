import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element: Element, admin }) => {
  const token = localStorage.getItem('authToken');
  let isAdmin = false;

  if (token) {
    const userRole = JSON.parse(atob(token.split('.')[1])).role;
    isAdmin = userRole === 'admin';
  }

  return (
    <Route
      element={
        token && (!admin || isAdmin) ? (
          <Element />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
