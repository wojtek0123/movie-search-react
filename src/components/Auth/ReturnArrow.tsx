import ArrowLeft from '../../assets/images/arrow-left-solid.svg';
import classes from './ReturnArrow.module.scss';

const ReturnArrow: React.FC<{ onAccount: () => void }> = ({ onAccount }) => {
	return (
		<div className={classes.returnArrow}>
			<img
				className={classes.returnArrow__image}
				src={ArrowLeft}
				alt='Cancel sign up and return to log in'
				onClick={onAccount}
			/>
		</div>
	);
};

export default ReturnArrow;
