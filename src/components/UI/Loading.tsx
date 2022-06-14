import LoadingSpinner from '../../assets/images/spinner-solid.svg';
import classes from './Loading.module.scss';

const Loading = () => {
	return (
		<img
			className={classes.loadingSpinner}
			src={LoadingSpinner}
			alt='Loading spinner'
		/>
	);
};

export default Loading;
