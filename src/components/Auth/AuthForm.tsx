import React, { useRef, useState, useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SubmitButton from './SubmitButton';

const AuthForm: React.FC = () => {
	const navigate = useNavigate();
	const [hasAccount, setHasAccount] = useState(true);

	const [isError, setIsError] = useState(false);
	const [validationError, setValidationError] = useState<string>(
		'Authentication failed!'
	);

	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

	const authCtx = useContext(AuthContext);

	const resetRefs = () => {
		emailInputRef.current!.value = '';
		passwordInputRef.current!.value = '';
		if (!hasAccount) {
			confirmPasswordInputRef.current!.value = '';
		}
	};

	const changeAccountStatus = () => {
		setHasAccount((prevState) => !prevState);
	};

	const popupErrorMessage = (message: string) => {
		setIsError(true);
		setValidationError(message);
	};

	const emailValidation = (enteredEmail: string | undefined) => {
		const regExp = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');

		if (enteredEmail === undefined) {
			return true;
		}

		if (!regExp.test(enteredEmail)) {
			popupErrorMessage('Invalid email. Try again!');
			return true;
		}

		return false;
	};

	const passwordValidation = (enteredPassword: string | undefined) => {
		const regExp = new RegExp(
			'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$'
		);

		if (enteredPassword === undefined) {
			return true;
		}

		if (hasAccount) {
			return false;
		}

		if (enteredPassword.length < 8 || enteredPassword.length > 24) {
			popupErrorMessage('Password should have from 8 to 24 characters');
			return true;
		}

		if (!/[A-Z]/.test(enteredPassword)) {
			popupErrorMessage('Password should have at least 1 upper characters');
			return true;
		}

		if (!/[a-z]/.test(enteredPassword)) {
			popupErrorMessage('Password should have at least 1 lower characters');
			return true;
		}

		if (!/[0-9]/.test(enteredPassword)) {
			popupErrorMessage('Password should have at least 1 number');
			return true;
		}

		if (!/[!@#$%^&*_=+-]/.test(enteredPassword)) {
			popupErrorMessage('Password should have at least 1 symbol');
			return true;
		}

		if (!regExp.test(enteredPassword)) {
			popupErrorMessage('Invalid password. Try again!');
			return true;
		}

		return false;
	};

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsError(false);

		const enteredEmail = emailInputRef.current?.value;
		const enteredPassword = passwordInputRef.current?.value;
		const enteredConfirmPassword = confirmPasswordInputRef.current?.value;

		if (emailValidation(enteredEmail)) {
			return;
		}

		if (passwordValidation(enteredPassword)) {
			return;
		}

		if (!hasAccount && enteredConfirmPassword !== enteredPassword) {
			setIsError(true);
			setValidationError('Passwords are different!');
			return;
		}

		let url =
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

		if (!hasAccount) {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
		}

		try {
			const response = await fetch(
				`${url}${process.env.REACT_APP_FIREBASE_API_KEY}`,
				{
					method: 'POST',
					body: JSON.stringify({
						email: enteredEmail,
						password: enteredPassword,
						returnSecureToken: true,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = await response.json();
			if (response.ok) {
				console.log(data);
				const expirationTime = new Date(
					new Date().getTime() + +data.expiresIn * 1000
				);
				authCtx.login(data.idToken, expirationTime.toISOString());
				navigate('/', { replace: true });
				return data;
			} else {
				let errorMessage = 'Authentication failed!';
				if (data && data.error && data.error.message) {
					errorMessage = data.error.message;
				}
				resetRefs();
				throw new Error(errorMessage);
			}
		} catch (error) {
			resetRefs();
			setIsError(true);
			if (hasAccount) {
				setValidationError('Invalid email or password! Try again!');
			} else {
				setValidationError('Email exists');
			}
		}
	};

	return (
		<>
			<Navigation />
			<main>
				<form className={classes.auth} onSubmit={submitHandler}>
					{hasAccount && (
						<SignIn
							emailRef={emailInputRef}
							passwordRef={passwordInputRef}
							onAccount={changeAccountStatus}
						/>
					)}

					{!hasAccount && (
						<SignUp
							emailRef={emailInputRef}
							passwordRef={passwordInputRef}
							confirmPasswordRef={confirmPasswordInputRef}
							onAccount={changeAccountStatus}
						/>
					)}
					{isError && (
						<div className={classes.auth__errorMsg}>{validationError}</div>
					)}

					<SubmitButton hasAccount={hasAccount} />
				</form>
			</main>
		</>
	);
};

export default AuthForm;
