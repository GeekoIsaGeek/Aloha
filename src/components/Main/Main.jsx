import React from 'react';
import Products from '../Products/Products';
import HeroSlider from '../Hero/HeroSlider';
import styled from 'styled-components';
import useProductsCtx from '../../Store/ProductsContext';
import { motion } from 'framer-motion';
const Main = () => {
	window.scrollTo(0, 0);
	const { products } = useProductsCtx();

	return (
		<StyledWrapper
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			initial={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			<HeroSlider />
			<Products products={products} />
		</StyledWrapper>
	);
};

export default Main;

const StyledWrapper = styled(motion.div)``;
