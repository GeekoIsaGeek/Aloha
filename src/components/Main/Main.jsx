import React from 'react';
import Product from '../Product/Product';
import HeroSlider from '../Hero/HeroSlider';
import styled from 'styled-components';

const Main = () => {
	return (
		<StyledWrapper>
			<HeroSlider />
			<Product />
		</StyledWrapper>
	);
};

export default Main;

const StyledWrapper = styled.div``;
