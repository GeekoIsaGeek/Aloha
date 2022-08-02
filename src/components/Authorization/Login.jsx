import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Store/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { login, currUser } = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	if (currUser) {
		navigate('/');
	}

	const handleLogin = async (e) => {
		e.preventDefault();
		const credentials = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		await login(credentials);
		navigate('/profile');
	};
	return (
		<StyledWrapper>
			<StyledForm onSubmit={handleLogin}>
				<StyledUsernameInput type='email' placeholder='Email' ref={emailRef} />
				<StyledPasswordInput type='password' placeholder='Password' ref={passwordRef} />
				<StyledButtons>
					<Link to='/signup'>Create Account</Link>
					<StyledSubmit>Login</StyledSubmit>
				</StyledButtons>
			</StyledForm>
		</StyledWrapper>
	);
};

export default Login;

const StyledWrapper = styled.div`
	min-height: 90vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffafbd;
	background: -webkit-linear-gradient(to right, #ffc 3a0, #ffafbd);
	background: linear-gradient(to right, #ffc3a0, #ffafbd);
	@media (max-width: 640px) {
		min-height: 80vh;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 70px;
	background-color: #ececec;
	border-radius: 5px;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	a {
		padding: 5px 8px;
		border-radius: 5px;
		transition: background 0.25s ease-out;
		&:hover {
			background-color: #cacaca;
		}
	}
	@media (max-width: 640px) {
		padding: 40px;
		border-radius: 10px;
	}
`;

const inputStyles = `
padding: 5px 10px;
font-size: 20px;
outline: none;
border-radius: 5px;
border: none;
min-width: 270px;
background-color: #f3f3f3;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

@media (max-width: 640px){
	font-size:16px;
	min-width:250px;
	padding: 3px 10px;
}
`;

const StyledUsernameInput = styled.input`
	${inputStyles}
`;
const StyledPasswordInput = styled.input`
	${inputStyles}
`;

const StyledButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 20px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
		'Open Sans', 'Helvetica Neue', sans-serif;
	@media (max-width: 640px) {
		font-size: 14px;
		margin-top: 15px;
	}
`;

const StyledSubmit = styled.button`
	border-radius: 5px;
	padding: 5px 25px;
	border-radius: 3px;
	border: none;
	font-size: 18px;
	background-color: #505050;
	color: white;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	transition: background 0.25s ease-out;
	&:hover {
		cursor: pointer;
		background-color: #3d3d3d;
	}
	@media (max-width: 640px) {
		font-size: 14px;
		padding: 5px 20px;
	}
`;
