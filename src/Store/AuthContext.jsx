import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../FirebaseConfig';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

const AuthCtx = createContext();

const AuthContextProvider = ({ children }) => {
	const [currUser, setCurrUser] = useState(null);

	const signUp = async ({ username, email, password }) => {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password);
			updateProfile(user, {
				displayName: username,
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrUser(user);
			} else {
				setCurrUser(null);
			}
		});
		return () => unsubscribe();
	}, []);

	const login = ({ email, password }) => signInWithEmailAndPassword(auth, email, password);
	const logOut = () => {
		signOut(auth);
	};

	return (
		<AuthCtx.Provider value={{ signUp, login, logOut, currUser }}>{children}</AuthCtx.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthCtx);
};
export default AuthContextProvider;
