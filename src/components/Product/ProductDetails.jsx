import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useProductsCtx from '../../Store/ProductsContext';

const ProductDetails = () => {
	const { productId } = useParams();
	const { products } = useProductsCtx();
	const product = products.find((pdct) => pdct.id == productId);
	const [mainImage, setMainImage] = useState(product.images[0]);

	return (
		<StyledWrapper>
			<StyledImagesWrapper>
				{product.images.map((image, i) => {
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
			<StyledSelectedImage src={mainImage} />
			<StyledDetailsWrapper>
				<h2>{product.title}</h2>
				<h3>About this item</h3>
				<StyledDetails>
					{product.details.map((item, i) => {
						return <li key={i}>{item}</li>;
					})}
				</StyledDetails>
				<StyledPrice>
					<span>{`$${product.price}`}</span>
					<button>Add to Cart</button>
				</StyledPrice>
			</StyledDetailsWrapper>
		</StyledWrapper>
	);
};

export default ProductDetails;

const StyledWrapper = styled.div`
	padding: 50px 30px;
	display: flex;
	width: 100vw;
`;
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
`;
const StyledSelectedImage = styled.img`
	height: 40vw;
	min-width: 40vw;
	object-fit: contain;
	margin-right: 20px;
	margin-left: 10px;
`;
const StyledDetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-right: 20px;
	h2 {
		font-weight: 500;
		border-bottom: solid 1.5px #e4e4e4;
		padding-bottom: 10px;
		text-align: start;
	}
	h3 {
		margin: 15px 0 10px 0;
		align-self: flex-start;
	}
	article {
		text-align: start;
	}
`;

const StyledDetails = styled.ul`
	list-style: disc;
	text-align: start;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding-left: 20px;
	font-weight: 500;
	font-size: 14px;
	padding-bottom: 20px;
	border-bottom: solid 1.5px #e4e4e4;
`;

const StyledPrice = styled.div`
	display: flex;
	align-self: start;
	align-items: center;
	margin-top: 20px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	padding: 10px;
	border-radius: 10px;
	gap: 50px;
	span {
		font-size: 1.4rem;
		font-weight: 500;
		color: #b12704;
		align-self: start;
	}
	button {
		background-color: #ffd900;
		border: none;
		font-size: 14px;
		padding: 5px 15px;
		font-weight: 500;
		border-radius: 10px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		transition: background 0.25s ease-out;
		&:hover {
			background-color: #ffbb00;
			cursor: pointer;
		}
	}
`;
