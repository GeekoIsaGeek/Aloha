import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../images/Aloha-logo.svg';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledNavigation>
				<ul>
					<Link to='/random'>Computer Accessories</Link>
					<Link to='/'>Computer Components</Link>
					<Link to='/'>Computers & Tablets</Link>
					<Link to='/'>Data Storage</Link>
				</ul>
				<ul>
					<Link to='/'>Monitors</Link>
					<Link to='/'>Networking Products</Link>
					<Link to='/'>Protectors</Link>
					<Link to='/'>Printers</Link>
				</ul>
				<ul>
					<Link to='/'>Scanners</Link>
					<Link to='/'>Servers</Link>
					<Link to='/'>Tablet Accessories</Link>
				</ul>
			</StyledNavigation>
			<img src={Logo} alt='logo' />
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.div`
	background-color: ${({ theme }) => theme.primary};
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;

const StyledNavigation = styled.div`
	display: flex;
	color: white;
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
		}
		a:hover {
			color: ${({ theme }) => theme.secondary};
		}
	}
`;
