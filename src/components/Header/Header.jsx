import React, { useRef } from 'react';
import logo from '../../images/Aloha-logo.svg';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import useProductsCtx from '../../Store/ProductsContext';

const Header = () => {
	const { setProducts, allProducts } = useProductsCtx();
	const inputRef = useRef();

	const searchProduct = () => {
		const input = inputRef.current.value;

		if (!input) {
			setProducts(allProducts);
		} else {
			setProducts(
				allProducts.filter((product) => {
					const title = product.title.toLowerCase();
					const category = product.category.toLowerCase();
					return title.includes(input.toLowerCase()) || category.includes(input.toLowerCase());
				})
			);
		}
	};

	const navigate = useNavigate();

	return (
		<StyledHeader>
			<StyledLogo src={logo} alt='logo' onClick={() => navigate('/')} />
			<SearchBar inputRef={inputRef} searchProduct={searchProduct} />
			<Navbar />
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	width: 100vw;
	height: 70px;
	padding: 10px 20px 10px 10px;
	background-color: ${({ theme }) => theme.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	.hamburgerIcon {
		color: white;
		font-size: 1.8rem;
		transition: color 0.25s ease-out;
		&:hover {
			cursor: pointer;
			color: ${({ theme }) => theme.secondary};
		}
	}
	@media (max-width: 420px) {
		height: 60px;
		padding: 5px;
		.hamburgerIcon {
			font-size: 1.5rem;
		}
	}
`;

const StyledLogo = styled.img`
	height: inherit;
	width: 100px;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 420px) {
		width: 70px;
	}
`;
