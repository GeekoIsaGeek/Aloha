import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/Product/ProductDetails';
import useProductsCtx from './Store/ProductsContext';

function App() {
	const { products } = useProductsCtx();

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/products/:productId' element={<ProductDetails />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
