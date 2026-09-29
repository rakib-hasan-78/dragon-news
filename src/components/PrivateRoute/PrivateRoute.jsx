import React from 'react';
import { useAuth } from '../../customHooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();
    if(user && user.email) return children
    return <Navigate state={location.pathname} to={'/auth/login'} />
    
};

export default PrivateRoute;