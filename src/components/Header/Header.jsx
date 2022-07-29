import React, { useRef, useState } from 'react';
import logo from '../../images/Aloha-logo.svg';
import { BsSearch } from 'react-icons/bs';
import {
	StyledHeader,
	StyledLogo,
	StyledSearchbar,
	StyledCart,
	StyledLogin,
	StyledWrapper,
} from './HeaderStyles';

import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdPerson } from 'react-icons/md';

const Header = () => {
	const inputRef = useRef();
	const searchProduct = () => {
		const input = inputRef.current.value;
		console.log(input);

		inputRef.current.value = '';
	};
	const [active, setActive] = useState(false);

	return (
		<StyledHeader>
			<StyledLogo src={logo} alt='logo' />
			<StyledSearchbar
				active={active}
				onClick={() => setActive(true)}
				onBlur={() => setActive(false)}
			>
				<input type='text' ref={inputRef} placeholder='Search for the desired product' />
				<button onClick={searchProduct}>
					<BsSearch />
				</button>
			</StyledSearchbar>
			<StyledWrapper>
				<StyledLogin>
					<MdPerson />
				</StyledLogin>
				<StyledCart>
					<RiShoppingCartLine className='cartIcon' />
					<h5 className='count'>0</h5>
				</StyledCart>
				<HiOutlineMenuAlt2 className='hamburgerIcon' />
			</StyledWrapper>
		</StyledHeader>
	);
};

export default Header;
