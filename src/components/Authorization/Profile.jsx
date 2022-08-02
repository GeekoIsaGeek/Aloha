import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../Store/AuthContext';
import { useNavigate } from 'react-router-dom';
import { RiShoppingCartLine, RiLogoutBoxRLine } from 'react-icons/ri';
import Logo from '../../images/Aloha-logo.svg';
import { Link } from 'react-router-dom';
import useProductsCtx from '../../Store/ProductsContext';

const Profile = () => {
	const { logOut } = useAuth();
	const { currUser } = useAuth();
	const navigate = useNavigate();
	const { subtotal } = useProductsCtx();
	const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const dateCreated = new Date(currUser.metadata.creationTime).toLocaleDateString(
		'en-US',
		dateOptions
	);

	const signOut = (e) => {
		e.preventDefault();
		logOut();
		navigate('/');
	};

	return (
		<StyledWrapper>
			<StyledProfile>
				<h1>Hello, {currUser.displayName}!</h1>
				<ul>
					<li>
						Currently, you have <span>{subtotal.count}</span>{' '}
						{subtotal.count > 1 ? 'items' : 'item'} in the cart.
					</li>
					<li>
						Registration Date: <span>{dateCreated}</span>
					</li>
				</ul>
				<button>
					<Link to='/cart'>
						<RiShoppingCartLine />
						See Cart
					</Link>
				</button>
				<StyledLogout onClick={(e) => signOut(e)}>
					<RiLogoutBoxRLine />
					Logout
				</StyledLogout>
				<StyledLogo src={Logo}></StyledLogo>
			</StyledProfile>
		</StyledWrapper>
	);
};

export default Profile;

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #f0f0f0;
	min-height: 90vh;
	background: #ffafbd;
	background: -webkit-linear-gradient(to right, #ffc 3a0, #ffafbd);
	background: linear-gradient(to right, #ffc3a0, #ffafbd);
	@media (max-width: 640px) {
		min-height: 64vh;
	}
`;

const StyledProfile = styled.div`
	padding: 100px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	background-color: #2a2a2a;
	color: white;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	position: relative;
	ul {
		list-style: none;
		margin: 60px auto;

		* {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
				Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
		li {
			font-size: 20px;
			text-align: start;
			span {
				font-weight: bold;
			}
		}
	}
	h1 {
		text-transform: capitalize;
		font-weight: 500;
		padding: 5px;
	}
	button {
		border: none;
		font-size: 1.3rem;
		padding: 5px 20px;
		border: 1px solid gray;
		border-radius: 5px;
		min-width: 60%;
		&,
		* {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
				Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 3px auto;
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
		transition: background 0.2s ease-out;
		&:hover {
			cursor: pointer;
			background-color: ${({ theme }) => theme.secondary};
		}
		svg {
			font-size: 20px;
			margin-right: 10px;
		}
	}
	@media (max-width: 640px) {
		width: 90vw;
		padding: 40px;
		ul {
			list-style: disc;
			margin: 20px 0 30px 10px;
			li {
				font-size: 16px;
			}
		}
		h1 {
			font-size: 28px;
		}
		button {
			font-size: 14px;
			min-width: 50%;
			padding: 3px 0;
			svg {
				font-size: 12px;
			}
		}
	}
`;
const StyledLogout = styled.button`
	transition: color 0.2s ease-out, background 0.2s ease-out !important;
	&:hover {
		background-color: #e92d53 !important;
		color: white;
		border-color: crimson;
	}
`;

const StyledLogo = styled.img`
	position: absolute;
	bottom: 15px;
	right: 15px;
	height: 50px;
	width: 80px;
	@media (max-width: 640px) {
		width: 60px;
		bottom: 0;
	}
`;
