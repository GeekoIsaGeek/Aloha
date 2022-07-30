import React from 'react';
import styled from 'styled-components';

const ProductItem = () => {
	return (
		<StyledProductItem>
			<img src={'https://i.ebayimg.com/images/g/RzUAAOSwxnFi49rh/s-l640.jpg'} alt='product' />
			<h5 className='title'>Sony WH-1000XM4 Wireless Noise-Canceling Headphones - Black</h5>
			<h5 className='price'>$124.5</h5>
		</StyledProductItem>
	);
};

export default ProductItem;

const StyledProductItem = styled.div`
	background-color: white;
	padding: 30px;
	border-radius: 10px;
	box-shadow: 1px 0px 3px 1px #d3d3d3;
	display: flex;
	gap: 15px;
	align-items: center;
	flex-direction: column;
	img {
		width: 230px;
		height: 230px;
		object-fit: cover;
		border-radius: 5px;
		transition: filter 0.2s ease-out;
		&:hover {
			filter: brightness(40%);
			cursor: pointer;
		}
	}
	.price {
		font-size: 18px;
	}
	.title {
		font-weight: 500;
		font-size: 14px;
		transition: color 0.2s ease-out;
		&:hover {
			color: orange;
			text-decoration: underline;
			cursor: pointer;
		}
	}
`;
