import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlinePlusSm, HiMinusSm } from 'react-icons/hi';
import useProductsCtx from '../../Store/ProductsContext';

const CartItem = ({ data }) => {
	const { subtotal, setSubtotal, cartItems, setCartItems } = useProductsCtx();

	const currProduct = cartItems.find((item) => item.id === data.id);
	const [count, setCount] = useState(currProduct.quantity);

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
			setCartItems(
				cartItems.map((item) => (item.id === data.id ? { ...item, quantity: count - 1 } : item))
			);
			setSubtotal({ price: subtotal.price - data.price, count: subtotal.count - 1 });
		}
		return;
	};
	const increment = () => {
		setCount(count + 1);
		setCartItems(
			cartItems.map((item) => (item.id === data.id ? { ...item, quantity: count + 1 } : item))
		);
		setSubtotal({ price: subtotal.price + data.price, count: subtotal.count + 1 });
	};

	const handleDeletion = () => {
		setCartItems(cartItems.filter((item) => item.id !== data.id));
	};

	return (
		<StyledCartItem>
			<img src={data.img} alt='cart-item' />
			<StyledDetails>
				<h2>{data.title}</h2>
				<h3>
					Condition: <span style={{ fontWeight: '700' }}>{data.condition}</span>
				</h3>
				<StyledManageItem>
					<StyledQuantitiy>
						<StyledMinus onClick={decrement}>{<HiMinusSm />}</StyledMinus>
						<input type='text' value={count} />
						<StyledPlus onClick={increment}>{<HiOutlinePlusSm />}</StyledPlus>
					</StyledQuantitiy>
					<StyledDelete onClick={handleDeletion}>Delete</StyledDelete>
				</StyledManageItem>
			</StyledDetails>
			<h3>${data.price}</h3>
		</StyledCartItem>
	);
};

export default CartItem;

const StyledCartItem = styled.div`
	display: flex;
	align-items: start;
	justify-content: space-between;
	border-bottom: 2px solid ${({ theme }) => theme.cart.dark};
	padding: 10px 0;
	gap: 20px;
	img {
		height: 150px;
		width: 150px;
		padding: 10px;
		background-color: white;
		border-radius: 10px;
		object-fit: contain;
	}
	@media (max-width: 640px) {
		gap: 5px;
		padding: 10px 0;
		img {
			height: 120px;
			border-radius: 5px;
		}
		h3 {
			font-size: 14px;
		}
	}
`;
const StyledDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-left: 10px;
	gap: 5px;
	width: 80%;
	h2,
	h3 {
		font-weight: 500;
		text-align: start;
		text-transform: capitalize;
	}
	h2 {
		font-size: 20px;
	}
	h3 {
		font-size: 18px;
	}
	@media (max-width: 640px) {
		h2 {
			font-size: 14px;
		}
		h3 {
			font-size: 13px;
		}
	}
`;

const StyledManageItem = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 20px;
	@media (max-width: 640px) {
		gap: 25px;
		margin-top: 10px;
	}
`;

const StyledDelete = styled.button`
	font-size: 1rem;
	border: none;
	background-color: inherit;
	color: inherit;
	font-weight: 700;
	transition: color 0.2s ease-out;
	&:hover {
		cursor: pointer;
		color: orangered;
	}
	@media (max-width: 640px) {
		font-size: 14px;
	}
`;

const StyledQuantitiy = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	input {
		height: 100%;
		outline: none;
		border: none;
		font-size: 1.2rem;
		caret-color: transparent;
		background-color: #303030;
		color: ${({ theme }) => theme.cart.light};
		cursor: default;
		text-align: center;
		width: 30px;
	}
	@media (max-width: 640px) {
		input {
			font-size: 14px;
			width: 30px;
		}
	}
`;

const StyledButton = styled.button`
	border: none;
	font-size: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.cart.dark};
	color: ${({ theme }) => theme.cart.light};
	height: 100%;
	padding: 5px;
	cursor: pointer;
	transition: background 0.25s ease-out, color 0.25s ease-out;
	&:hover {
		color: black;
		background-color: ${({ theme }) => theme.secondary};
	}
	@media (max-width: 640px) {
		font-size: 12px;
		padding: 4px;
	}
`;

const StyledPlus = styled(StyledButton)`
	border-radius: 0 0 10px 0;
`;
const StyledMinus = styled(StyledButton)`
	border-radius: 10px 0 0 0;
`;
