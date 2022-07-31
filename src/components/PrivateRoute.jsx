import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../Store/AuthContext';

const PrivateRoute = () => {
	const { currUser } = useAuth();

	return currUser ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
