import InputForm from './InputForm';
import classes from './SignIn.module.scss';
import NewAccountButton from './NewAccountButton';

const SignIn: React.FC<{
	emailRef: React.RefObject<HTMLInputElement>;
	passwordRef: React.RefObject<HTMLInputElement>;
	onAccount: () => void;
}> = ({ emailRef, passwordRef, onAccount }) => {
	return (
		<div className={classes.signIn}>
			<InputForm reference={emailRef} id='login' type='text' name='Login' />
			<InputForm
				reference={passwordRef}
				id='password'
				type='password'
				name='Password'
			/>
			<NewAccountButton onAccount={onAccount} />
		</div>
	);
};

export default SignIn;
