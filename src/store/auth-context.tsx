import React, { useState, useCallback, useEffect } from 'react';
import { IAuthContext } from '../types/types';

let logoutTimer: any;

const defaultState = {
	token: '',
	isLoggedIn: false,
	login: (token: string, expirationTime: string) => {},
	logout: () => {},
};

const AuthContext = React.createContext<IAuthContext>(defaultState);

const calculateRemainingTime = (expirationTime: string) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();

	const remainingDuration = adjExpirationTime - currentTime;

	return remainingDuration;
};

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem('token');
	const storedExpirationDate = localStorage.getItem('expirationTime');

	if (storedExpirationDate === null) {
		return;
	}

	const remainingTime = calculateRemainingTime(storedExpirationDate);

	if (remainingTime <= 3600) {
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');
		return null;
	}

	return {
		token: storedToken,
		duration: remainingTime,
	};
};

export const AuthContextProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const tokenData = retrieveStoredToken();

	let initialToken;
	if (tokenData) {
		initialToken = tokenData.token;
	}

	const [token, setToken] = useState(initialToken);

	const userIsLoggedIn = !!token;

	const logoutHandler = useCallback(() => {
		setToken(null);
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');

		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	}, []);

	const loginHandler = (token: string, expirationTime: string) => {
		setToken(token);
		localStorage.setItem('token', token);
		localStorage.setItem('expirationTime', expirationTime.toString());

		const remainingTime = calculateRemainingTime(expirationTime);

		logoutTimer = setTimeout(logoutHandler, remainingTime);
	};

	useEffect(() => {
		if (tokenData) {
			console.log(tokenData.duration);
			logoutTimer = setTimeout(logoutHandler, tokenData.duration);
		}
	}, [tokenData, logoutHandler]);

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export default AuthContext;
