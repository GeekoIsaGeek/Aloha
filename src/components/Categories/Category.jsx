import React from 'react';
import { useParams } from 'react-router-dom';
import useProductsCtx from '../../Store/ProductsContext';
import Products from '../Products/Products';

const Category = () => {
	const { products } = useProductsCtx();
	const { category } = useParams();

	const filteredProducts =
		category === 'all' ? products : products.filter((product) => product.category == category);

	return <Products products={filteredProducts} />;
};

export default Category;
