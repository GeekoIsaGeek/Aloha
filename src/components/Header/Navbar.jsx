import styled from 'styled-components';
import { RiShoppingCartLine, RiMenu5Line } from 'react-icons/ri';
import { MdPerson } from 'react-icons/md';
import { useState } from 'react';
import Categories from './Categories';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/AuthContext';

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);
	const navigate = useNavigate();
	const { currUser } = useAuth();

	return (
		<StyledWrapper>
			<StyledCart>
				<RiShoppingCartLine className='cartIcon' />
				<h5 className='count'>0</h5>
			</StyledCart>
			<StyledLogin>
				<MdPerson onClick={() => (currUser ? navigate('/profile') : navigate('/login'))} />
			</StyledLogin>
			<RiMenu5Line className='hamburgerIcon' onClick={() => setShowNav(true)} />
			<Categories setShowNav={setShowNav} showNav={showNav} />
		</StyledWrapper>
	);
};
export default Navbar;

const StyledWrapper = styled.div`
	display: flex;
	gap: 15px;
	justify-content: center;
	align-items: center;
	@media (max-width: 420px) {
		gap: 10px;
	}
`;

const StyledCart = styled.div`
	color: white;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
	.cartIcon {
		font-size: 1.6rem;
		transition: color 0.2s linear;
		&:hover {
			color: ${({ theme }) => theme.secondary};
		}
	}
	.count {
		font-size: 10px;
		height: 17px;
		width: 17px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fa9600;
		border-radius: 50%;
		position: absolute;
		top: -8px;
		right: -5px;
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

const StyledLogin = styled.div`
	color: white;
	font-size: 1.7rem;
	position: relative;
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
