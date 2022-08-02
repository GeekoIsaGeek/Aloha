import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../images/Aloha-logo.svg';

const Footer = () => {
	const basePath = '/products/categories/';
	return (
		<StyledFooter>
			<StyledNavigation>
				<ul>
					<Link to={`${basePath}computer-accessories`}>Computer Accessories</Link>
					<Link to={`${basePath}computer-components`}>Computer Components</Link>
					<Link to={`${basePath}computers-and-tablets`}>Computers & Tablets</Link>
					<Link to={`${basePath}data-storage`}>Data Storage</Link>
				</ul>
				<ul>
					<Link to={`${basePath}monitors`}>Monitors</Link>
					<Link to={`${basePath}networking-products`}>Networking Products</Link>
					<Link to={`${basePath}protectors`}>Protectors</Link>
					<Link to={`${basePath}printers`}>Printers</Link>
				</ul>
				<ul>
					<Link to={`${basePath}scanners`}>Scanners</Link>
					<Link to={`${basePath}servers`}>Servers</Link>
					<Link to={`${basePath}tablet-accessories`}>Tablet Accessories</Link>
					<Link to={`${basePath}office-furniture`}>Office Furniture</Link>
				</ul>
			</StyledNavigation>
			<img src={Logo} alt='logo' />
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.div`
	background-color: #2c2c2c;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	@media (max-width: 640px) {
		img {
			height: 50px;
			margin-bottom: 10px;
		}
	}
`;

const StyledNavigation = styled.div`
	display: flex;
	font-weight: 500;
	padding: 50px 0;
	text-align: start;
	width: 100%;
	justify-content: space-evenly;
	ul {
		display: flex;
		flex-direction: column;
		gap: 5px;
		a {
			transition: color 0.2s ease-out;
			font-family: system-ui;
			font-weight: 400;
			color: white;
		}
		a:hover {
			color: ${({ theme }) => theme.secondary};
		}
	}
	@media (max-width: 640px) {
		gap: 25px;
		ul {
			gap: 8px;
			a {
				font-size: 14px;
			}
		}
	}
`;
