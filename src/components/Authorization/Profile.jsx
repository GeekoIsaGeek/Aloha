import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../Store/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const { logOut } = useAuth();
	const { currUser } = useAuth();
	const navigate = useNavigate();

	const signOut = (e) => {
		e.preventDefault();
		logOut();
		navigate('/');
	};

	return (
		<StyledWrapper>
			<h2>Hello, {currUser.displayName}</h2>
			<button onClick={(e) => signOut(e)}>Logout</button>
		</StyledWrapper>
	);
};

export default Profile;

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 90vh;
`;
