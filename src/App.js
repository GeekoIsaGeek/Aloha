import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetails from './components/Products/Details/ProductDetails';
import Category from './components/Products/Category';
import Login from './components/Authorization/Login';
import Signup from './components/Authorization/Signup';
import Profile from './components/Authorization/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/products/:productId' element={<ProductDetails />} />
				<Route path='/products/categories/:category' element={<Category />} />
				<Route path='/login' element={<Login />} />
				<Route element={<PrivateRoute />}>
					<Route path='/profile' element={<Profile />} />
				</Route>
				<Route path='/signup' element={<Signup />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
