import React, { useRef, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './AuthForm.scss';
import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../../assets/images/arrow-left-solid.svg';

const AuthForm: React.FC = () => {
	const navigate = useNavigate();
	const [hasAccount, setHasAccount] = useState(true);
	const [isEmailValidate, setIsEmailValidate] = useState(true);
	const [isPasswordValidate, setIsPasswordValidate] = useState(true);
	const [isConfirmPasswordValidate, setIsConfirmPasswordValidate] =
		useState(true);
	const [validations, setValidations] = useState<String[]>([]);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

	const changeAccountStatus = () => {
		setHasAccount((prevState) => !prevState);
	};

	const emailValidation = (emailInput: string) => {
		return emailInput
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const passwordValidation = (inputPassword: string) => {
		if (inputPassword.length >= 6) {
			return true;
		}
		return false;
	};

	const confirmPasswordValidation = (
		inputPassword: string,
		inputConfirmPassword: string
	) => {
		if (inputPassword !== inputConfirmPassword) {
			return true;
		}
		return false;
	};

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current!.value;
		const enteredPassword = passwordInputRef.current!.value;
		const enteredConfirmPassword = confirmPasswordInputRef.current!.value;

		if (!emailValidation(enteredEmail)) {
			setIsEmailValidate(false);
			setValidations((prevState) => [...prevState, 'email']);
		}

		if (!passwordValidation(enteredPassword)) {
			setIsPasswordValidate(false);
			setValidations((prevState) => [...prevState, 'password']);
		}

		if (confirmPasswordValidation(enteredPassword, enteredConfirmPassword)) {
			setIsConfirmPasswordValidate(false);
			setValidations((prevState) => [...prevState, 'confirm_password']);
		}

		if (validations.length !== 0) {
			console.log('ERROR');
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
				navigate('/', { replace: true });
				return data;
			} else {
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
			<form className='auth' onSubmit={submitHandler}>
				{!hasAccount && (
					<img className='auth__cancel-btn' src={ArrowLeft} alt='Cancel sign up and return to log in' onClick={changeAccountStatus} />
				)}
				<label htmlFor='login'>Login</label>
				<input
					type='text'
					id='login'
					className='auth__input'
					ref={emailInputRef}
					required
				/>
				{!isEmailValidate && <small>Email is not valid!</small>}
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					className='auth__input'
					ref={passwordInputRef}
					required
				/>
				{!isPasswordValidate && (
					<small>Password should have at least 6 characters!</small>
				)}
				{!hasAccount && (
					<>
						<label htmlFor='password'>Confirm Password</label>
						<input
							type='password'
							id='password'
							className='auth__input'
							ref={confirmPasswordInputRef}
							required
						/>
					</>
				)}
				{!isConfirmPasswordValidate && <small>Passwords are different!</small>}
				{hasAccount && (
					<button
						type='button'
						onClick={changeAccountStatus}
						className='auth__btn-link'
					>
						Create a new account!
					</button>
				)}
				<button type='submit' className='auth__btn'>
					{hasAccount ? 'Log in' : 'Sign up'}
				</button>
			</form>
		</div>
	);
};

export default AuthForm;
