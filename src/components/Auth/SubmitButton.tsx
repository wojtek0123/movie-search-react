import classes from './SubmitButton.module.scss';

const SubmitButton: React.FC<{ hasAccount: boolean }> = ({ hasAccount }) => {
	return (
		<button type='submit' className={classes.submitButton}>
			{hasAccount ? 'Log in' : 'Sign up'}
		</button>
	);
};

export default SubmitButton;
