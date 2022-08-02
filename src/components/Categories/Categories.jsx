import React from 'react';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Categories = ({ setShowNav, showNav }) => {
	const basePath = '/products/categories/';

	document.body.style.overflowY = showNav ? 'hidden' : 'scroll';

	return (
		<StyledWrapper showNav={showNav} onClick={() => setShowNav(false)}>
			<StyledList>
				<MdCancel className='exit' onClick={() => setShowNav(false)} />
				<Link to={`${basePath}all`}>
					<span style={{ fontWeight: 'bold' }}>All</span>
				</Link>
				<Link to={`${basePath}computer-accessories`}>Computer Accessories</Link>
				<Link to={`${basePath}computer-components`}>Computer Components</Link>
				<Link to={`${basePath}smartphones`}>Smartphones</Link>
				<Link to={`${basePath}data-storage`}>Data Storage</Link>
				<Link to={`${basePath}monitors`}>Monitors</Link>
				<Link to={`${basePath}networking-products`}>Networking Products</Link>
				<Link to={`${basePath}protectors`}>Protectors</Link>
				<Link to={`${basePath}printers`}>Printers</Link>
				<Link to={`${basePath}scanners`}>Scanners</Link>
				<Link to={`${basePath}servers`}>Servers</Link>
				<Link to={`${basePath}tablet-accessories`}>Tablet Accessories</Link>
				<Link to={`${basePath}office-furniture`}>Office Furniture</Link>
			</StyledList>
		</StyledWrapper>
	);
};

export default Categories;

const StyledWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	min-height: 100%;
	display: flex;
	z-index: 100;
	justify-content: end;
	width: 100%;
	transition: background 0.2s linear;
	visibility: ${({ showNav }) => (showNav ? 'visible' : 'hidden')};
	background-color: ${({ showNav }) => (showNav ? '#000000d4' : 'transparent')};
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
		color: #e9e9e9;
		left: -40px;
		top: 5px;
		font-size: 2.2rem;
		opacity: ${({ showNav }) => (showNav ? 0 : 1)};
		&:hover {
			cursor: pointer;
			color: #fdc274;
		}
	}
	a {
		padding: 10px 20px;
		font-weight: 500;

		&:hover {
			cursor: pointer;
			background-color: #dadada;
		}
	}
	@media (max-width: 420px) {
		a {
			font-size: 12px;
			padding: 8px 15px;
		}
		.exit {
			font-size: 1.8rem;
			left: -30px;
			top: 0;
		}
	}
`;
