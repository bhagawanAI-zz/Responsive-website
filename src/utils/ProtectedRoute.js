import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const authToken = localStorage.getItem('authToken');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authToken) {
          return <Component {...props} />;
        } else return <Redirect to='/' />;
      }}
    />
  );
}

export default ProtectedRoute;