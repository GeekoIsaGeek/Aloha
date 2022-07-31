import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import Filters from './Filters';

const Products = (props) => {
	const [showSortingOptions, setShowSortingOptions] = useState(false);
	const [showConditionOptions, setShowConditionOptions] = useState(false);
	const [sortByValue, setSortByValue] = useState('');
	const [conditionValue, setConditionValue] = useState('');
	const [products, setProducts] = useState(props.products);

	//If client has selected a certain category, has navigated to another route, and props.products have changed, update a local state too to render a relevant product
	useEffect(() => {
		setProducts(props.products);
	}, [props.products]);

	const sortProducts = (selectedOption) => {
		const copyOfProducts = [...products];
		switch (selectedOption) {
			case 'date-newest':
				copyOfProducts.sort((a, b) => a.date - b.date);
				break;
			case 'date-oldest':
				copyOfProducts.sort((a, b) => b.date - a.date);
				break;
			case 'price-highest':
				copyOfProducts.sort((a, b) => b.price - a.price);
				break;
			case 'price-lowest':
				copyOfProducts.sort((a, b) => a.price - b.price);
				break;
			default:
			//Do nothing because there are no other options
		}
		setProducts(copyOfProducts);
	};

	const filterProductsByCondition = (selectedOption) => {
		const originalArray = props.products;
		switch (selectedOption) {
			case 'any':
				return originalArray;
			case 'new':
				return originalArray.filter((product) => product.condition === 'new');
			case 'used':
				return originalArray.filter((product) => product.condition === 'used');
			default:
				return originalArray;
		}
	};

	return (
		<StyledWrapper
			onClick={() => {
				if (showSortingOptions || showConditionOptions) {
					setShowSortingOptions(false);
					setShowConditionOptions(false);
				}
			}}
		>
			<Filters
				showSortingOptions={showSortingOptions}
				setShowSortingOptions={setShowSortingOptions}
				showConditionOptions={showConditionOptions}
				setShowConditionOptions={setShowConditionOptions}
				sortByValue={sortByValue}
				setSortByValue={setSortByValue}
				conditionValue={conditionValue}
				setConditionValue={setConditionValue}
				sortProducts={sortProducts}
				filterProductsByCondition={filterProductsByCondition}
				setProducts={setProducts}
				products={products}
			/>
			<StyledProducts>
				{products.length > 0 ? (
					products.map((pr, i) => {
						return <ProductItem product={pr} key={i} />;
					})
				) : (
					<h3>Product not found</h3>
				)}
			</StyledProducts>
		</StyledWrapper>
	);
};

export default Products;

const StyledWrapper = styled.div`
	background-color: #f0f0f0;
	margin-top: -5px;
	display: flex;
	flex-direction: column;
	padding: 0 30px;
	padding-bottom: 90px;
	min-height: 90vh;
`;

const StyledProducts = styled.div`
	width: 100%;
	display: grid;
	justify-content: center;
	gap: 25px;
	min-height: 40vh;
	grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
	h3 {
		padding-top: 100px;
		font-weight: 500;
		font-size: 20px;
	}
`;
