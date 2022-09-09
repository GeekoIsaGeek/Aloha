import Main from './Main/Main';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import ProductDetails from './Products/Details/ProductDetails';
import Category from './Categories/Category';
import Login from './Authorization/Login';
import Signup from './Authorization/Signup';
import Profile from './Authorization/Profile';
import PrivateRoute from './PrivateRoute';
import Cart from './Cart/Cart';
import { AnimatePresence } from 'framer-motion';
import { useLayoutEffect } from 'react';

const AnimatedRoutes = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [navigate]);
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Main />} />
				<Route path='/products/:productId' element={<ProductDetails />} />
				<Route path='/products/categories/:category' element={<Category />} />
				<Route path='/login' element={<Login />} />
				<Route element={<PrivateRoute />}>
					<Route path='/profile' element={<Profile />} />
					<Route path='/cart' element={<Cart />} />
				</Route>
				<Route path='/signup' element={<Signup />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
