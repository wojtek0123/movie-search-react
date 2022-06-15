import React from 'react';
import InputForm from './InputForm';
import classes from './SignUp.module.scss';
import ReturnArrow from './ReturnArrow';

const SignUp: React.FC<{
	emailRef: React.RefObject<HTMLInputElement>;
	passwordRef: React.RefObject<HTMLInputElement>;
	confirmPasswordRef: React.RefObject<HTMLInputElement>;
	onAccount: () => void;
}> = ({ emailRef, passwordRef, confirmPasswordRef, onAccount }) => {
	return (
		<div className={classes.signUp}>
			<ReturnArrow onAccount={onAccount} />
			<InputForm
				reference={emailRef}
				id='login'
				type='text'
				name='Login'
			/>
			<InputForm
				reference={passwordRef}
				id='password'
				type='password'
				name='Password'
			/>
			<InputForm
				reference={confirmPasswordRef}
				id='confirm-password'
				type='password'
				name='Confirm Password'
			/>
		</div>
	);
};

export default SignUp;
