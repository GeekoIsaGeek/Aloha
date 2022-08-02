import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import useProductsCtx from '../../Store/ProductsContext';

const Cart = () => {
	const { subtotal, cartItems } = useProductsCtx();
	const itemsCount = subtotal.count;
	return (
		<StyledWrapper>
			<StyledCart>
				<h1>Shopping Cart</h1>
				{cartItems.map((item, i) => (
					<CartItem
						key={i}
						data={{
							id: item.id,
							img: item.img,
							price: item.price,
							title: item.title,
							condition: item.condition,
							quantity: item.quantity,
						}}
					/>
				))}
				<StyledSubtotal>
					Subtotal ({itemsCount} {itemsCount > 1 ? 'items' : 'item'}):{' '}
					<span>${subtotal.price.toFixed(2)}</span>
				</StyledSubtotal>
			</StyledCart>
		</StyledWrapper>
	);
};

export default Cart;
const StyledWrapper = styled.div`
	min-height: 90vh;
	background: #ffafbd;
	background: -webkit-linear-gradient(to right, #ffc 3a0, #ffafbd);
	background: linear-gradient(to right, #ffc3a0, #ffafbd);
	color: ${({ theme }) => theme.primary};
	display: flex;
	justify-content: center;
`;
const StyledCart = styled.div`
	margin: 50px;
	padding: 50px;
	border-radius: 10px;
	background-color: #2a2a2a;
	color: white;
	width: 80%;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
	h1 {
		font-weight: 500;
		border-bottom: 2px solid white;
		padding-bottom: 10px;
		text-align: start;
	}
	@media (max-width: 640px) {
		padding: 20px 10px;
		width: 100%;
		border-radius: 0;
		margin: 50px 0;
		h1 {
			font-size: 20px;
		}
	}
`;

const StyledSubtotal = styled.h2`
	text-align: end;
	font-weight: 500;
	padding-top: 10px;
	span {
		font-weight: 700;
	}
	@media (max-width: 640px) {
		font-size: 16px;
	}
`;
