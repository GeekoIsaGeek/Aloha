import React from 'react';
import styled from 'styled-components';

const AdditionalImages = ({ product, setMainImage }) => {
	return (
		<StyledImagesWrapper>
			{product?.images.map((image, i) => {
				return (
					<img
						src={image}
						alt={`additional-${i}`}
						key={i}
						onMouseEnter={() => setMainImage(image)}
					/>
				);
			})}
		</StyledImagesWrapper>
	);
};

export default AdditionalImages;

const StyledImagesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	img {
		width: 50px;
		height: 50px;
		object-fit: contain;
		border-radius: 2px;
		transition: border 0.1s linear, box-shadow 0.1s linear;
		border: 1px solid transparent;
		border-radius: 2px;
		&:hover {
			cursor: pointer;
			border-color: #ff6600;
			box-shadow: 0px 0px 5px 1px #ff8800;
		}
	}
	@media (max-width: 920px) {
		flex-direction: row;
		justify-content: center;
		order: 2;
		gap: 5px;
		img {
			border-radius: 5px;
		}
	}
`;
