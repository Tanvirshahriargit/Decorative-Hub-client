import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const SequreRoute = ({ children, ...rest }) => {
    const { user, loading ,isAdmin} = useAuth();
    if (loading) {
        return <Spinner animation="border" variant="info" />
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email && isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default SequreRoute;