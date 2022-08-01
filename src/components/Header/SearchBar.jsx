import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ focused, setFocused, inputRef, searchProduct }) => {
	return (
		<StyledSearchbar
			focused={focused}
			onClick={() => setFocused(true)}
			onBlur={() => setFocused(false)}
		>
			<input
				type='text'
				ref={inputRef}
				placeholder='Search for the desired product'
				onChange={searchProduct}
			/>
			<button onClick={searchProduct}>
				<BsSearch />
			</button>
		</StyledSearchbar>
	);
};
export default SearchBar;

const StyledSearchbar = styled.div`
	display: flex;
	height: 80%;
	width: 70%;
	margin: 0 20px;
	border-radius: 5px;
	outline: ${({ focused }) => (focused ? '3px solid orange' : 'unset')};
	button {
		font-size: 1.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		background-color: #fdbe77;
		transition: background 0.25s ease-out;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		border: none;
	}
	input {
		outline: unset;
		padding: 0 10px;
		width: 95%;
		font-weight: 500;
		border: none;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	button:hover {
		cursor: pointer;
		background-color: #ec9f47;
	}
	@media (max-width: 420px) {
		margin: 0 10px;
		height: 60%;
		outline-width: 1.5px;
		button {
			width: 40px;
			font-size: 1rem;
		}
	}
`;
