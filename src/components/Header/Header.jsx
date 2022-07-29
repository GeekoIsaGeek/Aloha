import React, { useRef, useState } from 'react';
import logo from '../../images/Aloha-logo.svg';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
	const inputRef = useRef();
	const searchProduct = () => {
		const input = inputRef.current.value;
		console.log(input);

		inputRef.current.value = '';
	};
	const [focused, setFocused] = useState(false);

	return (
		<StyledHeader>
			<StyledLogo src={logo} alt='logo' />
			<SearchBar
				focused={focused}
				setFocused={setFocused}
				inputRef={inputRef}
				searchProduct={searchProduct}
			/>
			<Navbar />
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	width: 100vw;
	height: 70px;
	padding: 10px;
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
		padding: 5px;
		.hamburgerIcon {
			font-size: 1.5rem;
		}
	}
`;

const StyledLogo = styled.img`
	height: inherit;
	width: 100px;
	@media (max-width: 420px) {
		width: 70px;
	}
`;
