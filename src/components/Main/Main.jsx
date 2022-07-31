import React from 'react';
import Products from '../Products/Products';
import HeroSlider from '../Hero/HeroSlider';
import styled from 'styled-components';
import useProductsCtx from '../../Store/ProductsContext';

const Main = () => {
	const { products } = useProductsCtx();

	return (
		<StyledWrapper>
			<HeroSlider />
			<Products products={products} />
		</StyledWrapper>
	);
};

export default Main;

const StyledWrapper = styled.div``;
