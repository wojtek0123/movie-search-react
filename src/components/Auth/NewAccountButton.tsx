import classes from './NewAccountButton.module.scss';

const NewAccountButton: React.FC<{ onAccount: () => void }> = ({
	onAccount,
}) => {
	return (
		<button
			type='button'
			onClick={onAccount}
			className={classes.newAccountButton}
		>
			Create a new account!
		</button>
	);
};

export default NewAccountButton;
