import { createContext, useContext } from 'react';
import Products from './Products';
import { useState, useEffect } from 'react';

const ProductsCtx = createContext();

export const ProductsContextProvider = ({ children }) => {
	const initialState = () => {
		const fetchedCartItems = localStorage.getItem('cartItems');
		if (!fetchedCartItems) {
			return [];
		} else {
			return JSON.parse(fetchedCartItems);
		}
	};
	const [cartItems, setCartItems] = useState(initialState);
	const [products, setProducts] = useState(() => Products.sort((a, b) => a.id - b.id));
	const [subtotal, setSubtotal] = useState({
		count: 0,
		price: 0,
	});

	useEffect(() => localStorage.setItem('cartItems', JSON.stringify(cartItems)), [cartItems]);

	useEffect(() => {
		let totalPrice = 0,
			totalCount = 0;

		cartItems.forEach((item) => {
			totalCount += item.quantity;
			totalPrice += item.price * totalCount;
		});

		setSubtotal({ count: totalCount, price: totalPrice });
	}, [cartItems]);

	return (
		<ProductsCtx.Provider
			value={{
				products,
				setProducts,
				allProducts: Products,
				subtotal,
				setSubtotal,
				cartItems,
				setCartItems,
			}}
		>
			{children}
		</ProductsCtx.Provider>
	);
};

const useProductsCtx = () => {
	return useContext(ProductsCtx);
};

export default useProductsCtx;
