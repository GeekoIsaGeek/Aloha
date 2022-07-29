import styled from 'styled-components';

export const StyledHeader = styled.header`
	width: 100vw;
	height: 70px;
	padding: 10px;
	background-color: #363636;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.hamburgerIcon {
		color: white;
		font-size: 1.9rem;
		transition: color 0.25s ease-out;
		&:hover {
			cursor: pointer;
			color: ${({ theme }) => theme.secondary};
		}
	}
	@media (max-width: 420px) {
		padding: 5px;
		.hamburgerIcon {
			font-size: 1.7rem;
		}
	}
`;

export const StyledSearchbar = styled.div`
	display: flex;
	height: 80%;
	width: 70%;
	margin: 0 20px;
	border-radius: 5px;
	outline: ${({ active }) => (active ? '3px solid orange' : 'unset')};
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

export const StyledLogo = styled.img`
	height: inherit;
	width: 100px;
	@media (max-width: 420px) {
		width: 70px;
	}
`;

export const StyledCart = styled.div`
	color: white;
	position: relative;
	&:hover {
		cursor: pointer;
	}
	.cartIcon {
		font-size: 1.7rem;
		transition: color 0.2s linear;
		&:hover {
			color: ${({ theme }) => theme.secondary};
		}
	}
	.count {
		font-size: 12px;
		height: 20px;
		width: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fa9600;
		border-radius: 50%;
		position: absolute;
		top: -10px;
		right: -7px;
	}
	@media (max-width: 420px) {
		.cartIcon {
			font-size: 1.3rem;
		}
		.count {
			width: 15px;
			height: 15px;
			top: -5px;
			font-size: 10px;
		}
	}
`;

export const StyledLogin = styled.div`
	color: white;
	font-size: 1.7rem;
	display: flex;
	justify-content: center;
	transition: color 0.2s linear;
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.secondary};
	}
	@media (max-width: 420px) {
		font-size: 1.5rem;
	}
`;

export const StyledWrapper = styled.div`
	display: flex;
	gap: 15px;
	justify-content: center;
	align-items: center;
	@media (max-width: 420px) {
		gap: 10px;
	}
`;
