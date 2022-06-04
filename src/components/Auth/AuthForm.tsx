import React, { useRef, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';

const AuthForm: React.FC = () => {
	const navigate = useNavigate();
	const [hasAccount, setHasAccount] = useState(true);
	const [isEmailValidate, setIsEmailValidate] = useState(true);
	const [isPasswordValidate, setIsPasswordValidate] = useState(true);
	const [validations, setValidations] = useState<String[]>([]);

	// const [enteredEmail, setEnteredEmail] = useState();
	// const [isLoading, setIsLoading] = useState(false);

	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const changeAccountStatus = () => {
		setHasAccount(false);
	};

	const emailValidation = (emailInput: string) => {
		return emailInput
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const passwordValidation = (inputPassword: string) => {
		if (inputPassword.length > 6) {
			return true;
		}
		return false;
	};

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current!.value;
		const enteredPassword = passwordInputRef.current!.value;

		if (!emailValidation(enteredEmail)) {
			setIsEmailValidate(false);
			setValidations((prevState) => [...prevState, 'email']);
		}

		if (!passwordValidation(enteredPassword)) {
			setIsPasswordValidate(false);
			setValidations((prevState) => [...prevState, 'password']);
		}

		if (validations.length !== 0) {
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
			if (response.ok) {
				navigate('/', { replace: true });
				return response.json();
			} else {
				const data = await response.json();
				let errorMessage = 'Authentication failed!';
				if (data && data.error && data.error.message) {
					errorMessage = data.error.message;
				}

				throw new Error(errorMessage);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Navigation />
			<form className={classes.form} onSubmit={submitHandler}>
				<label htmlFor='login'>Login</label>
				<input
					type='text'
					id='login'
					className={classes['form__input']}
					ref={emailInputRef}
					required
				/>
				{!isEmailValidate && <small>Email is not valid!</small>}
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					className={classes['form__input']}
					ref={passwordInputRef}
					required
				/>
				{!isPasswordValidate && (
					<small>Password should have at least 7 characters!</small>
				)}
				{hasAccount && (
					<button
						type='button'
						onClick={changeAccountStatus}
						className={classes['form__btn-link']}
					>
						Create a new account!
					</button>
				)}
				<button type='submit' className={classes['form__btn']}>
					{hasAccount ? 'Log in' : 'Sign up'}
				</button>
			</form>
		</div>
	);
};

export default AuthForm;
