import React from 'react';
import styled from 'styled-components';

const HeroSliderItem = ({ image }) => {
	return <StyledImage src={image} />;
};

export default HeroSliderItem;

const StyledImage = styled.img`
	width: 100vw;
	height: 60vh;
	object-fit: cover;
	@media (max-width: 640px) {
		height: 40vh;
	}
`;
