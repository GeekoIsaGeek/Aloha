import React from 'react';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';

const Categories = ({ setShowNav, showNav }) => {
	return (
		<StyledWrapper showNav={showNav} onClick={() => setShowNav(false)}>
			<StyledList>
				<MdCancel className='exit' onClick={() => setShowNav(false)} />
				<li>Computer Accessories</li>
				<li>Computer Components</li>
				<li>Computers & Tablets</li>
				<li>Data Storage</li>
				<li>Monitors</li>
				<li>Networking Products</li>
				<li>Protectors</li>
				<li>Printers</li>
				<li>Scanners</li>
				<li>Servers</li>
				<li>Tablet Accessories</li>
			</StyledList>
		</StyledWrapper>
	);
};

export default Categories;

const StyledWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	min-height: 100%;
	display: flex;
	justify-content: end;
	width: 100%;
	transition: background 0.2s linear;
	visibility: ${({ showNav }) => (showNav ? 'visible' : 'hidden')};
	background-color: ${({ showNav }) => (showNav ? '#000000c8' : 'transparent')};
`;
const StyledList = styled.ul`
	background-color: whitesmoke;
	padding: 20px 0;
	display: flex;
	min-width: 20%;
	width: max-content;
	flex-direction: column;
	text-align: start;
	position: relative;
	.exit {
		position: absolute;
		color: #dfdfdf;
		left: -40px;
		top: 5px;
		font-size: 2.2rem;
		opacity: ${({ showNav }) => (showNav ? 0 : 1)};
		&:hover {
			cursor: pointer;
			color: #fdc274;
		}
	}
	li {
		padding: 10px 20px;
		font-weight: 500;

		&:hover {
			cursor: pointer;
			background-color: #dadada;
		}
	}
`;
