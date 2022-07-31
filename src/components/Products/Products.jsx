import React, { useState } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import Filters from './Filters';

const Products = ({ products }) => {
	const [showFilters, setShowFilters] = useState(false);
	const [showConditions, setShowConditions] = useState(false);

	return (
		<StyledWrapper
			onClick={() => {
				if (showFilters || showConditions) {
					setShowFilters(false);
					setShowConditions(false);
				}
			}}
		>
			<Filters
				showFilters={showFilters}
				setShowFilters={setShowFilters}
				showConditions={showConditions}
				setShowConditions={setShowConditions}
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
