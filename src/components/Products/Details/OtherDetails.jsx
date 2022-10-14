import React from 'react';
import styled from 'styled-components';
import useProductsCtx from '../../../Store/ProductsContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OtherDetails = ({ product }) => {
	const { cartItems, setCartItems } = useProductsCtx();
	const navigate = useNavigate();

	const addToCart = () => {
		const cartItem = {
			id: product.id,
			quantity: 1,
			price: product.price,
			img: product.images[0],
			title: product.title,
			condition: product.condition,
		};

		const existingItem = cartItems.find((item) => item.id === cartItem.id);

		if (existingItem) {
			const elem = { ...existingItem, quantity: existingItem.quantity + 1 };
			setCartItems(cartItems.map((item) => (item.id === cartItem.id ? elem : item)));
		} else {
			setCartItems([...cartItems, cartItem]);
		}
		cartItems === [] && navigate('/cart');
	};

	return (
		<StyledDetailsWrapper
			animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
			exit={{ opacity: 0, x: '100%', transition: { duration: 0.4 } }}
			initial={{ opacity: 0, x: '50%', transition: { duration: 1 } }}
		>
			<h2>{product.title}</h2>
			<h3>About this item</h3>
			<StyledDetails>
				{product.details.map((item, i) => {
					return <li key={i}>{item}</li>;
				})}
			</StyledDetails>
			<StyledPrice>
				<span>{`$${product.price}`}</span>
				<button onClick={addToCart}>Add to Cart</button>
			</StyledPrice>
		</StyledDetailsWrapper>
	);
};

export default OtherDetails;

const StyledDetailsWrapper = styled(motion.div)`
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
	@media (max-width: 920px) {
		order: 3;
		h2 {
			font-size: 20px;
			padding-bottom: 5px;
		}
		h3 {
			margin: 10px 0 7px 0;
			font-size: 18px;
		}
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
	@media (max-width: 640px) {
		font-size: 13px;
	}
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
	@media (max-width: 640px) {
		margin-top: 10px;
		align-self: center;
		gap: 30px;
		span {
			font-size: 1.3rem;
		}
		button {
			font-size: 13px;
			border-radius: 5px;
		}
	}
`;
