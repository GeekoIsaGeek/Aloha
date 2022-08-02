import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
	let title = product.title;

	//Shorten the title if it's too long and put ... at the end
	const splittedTitle = title.split(' ');
	if (splittedTitle.length > 10) {
		title = splittedTitle.splice(0, 10).join(' ');
	}

	return (
		<StyledProductItem>
			<Link to={`/products/${product.id}`}>
				<img src={product.images[0]} alt='product' />
				<h5 className='title'>
					<span>{title}</span>...
				</h5>
				<h5 className='price'>${product.price}</h5>
			</Link>
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
	align-items: center;
	flex-direction: column;

	&:hover {
		cursor: pointer;
	}
	img {
		width: 100%;
		height: 200px;
		object-fit: contain;
		padding-bottom: 20px;
		border-bottom: 1px solid darkgray;
	}
	.price {
		font-size: 18px;
	}
	.title {
		font-weight: 500;
		margin: 15px 0;
		transition: color 0.2s ease-out;
		font-size: 18px;
		color: black;
		span {
			font-size: 14px;
			&:hover {
				color: orange;
				text-decoration: underline;
				cursor: pointer;
			}
		}
	}
	@media (max-width: 640px) {
		padding: 20px;
		img {
			height: 150px;
			width: 100%;
		}
		.title {
			margin: 10px;
			span {
				font-size: 12px;
			}
		}
		.price {
			font-size: 1rem;
		}
	}
`;
