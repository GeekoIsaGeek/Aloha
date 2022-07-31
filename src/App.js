import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetails from './components/Products/Details/ProductDetails';
import Category from './components/Products/Category';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/products/:productId' element={<ProductDetails />} />
				<Route path='/products/categories/:category' element={<Category />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
