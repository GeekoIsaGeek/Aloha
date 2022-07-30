import { createContext, useContext } from 'react';
import Products from './Products';
import { useState, useEffect } from 'react';

const ProductsCtx = createContext();

export const ProductsContextProvider = ({ children }) => {
	return <ProductsCtx.Provider value={{ products: Products }}>{children}</ProductsCtx.Provider>;
};

const useProductsCtx = () => {
	return useContext(ProductsCtx);
};

export default useProductsCtx;
