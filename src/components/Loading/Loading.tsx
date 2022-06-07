import LoadingSpinner from '../../assets/images/spinner-solid.svg';
import './Loading.scss';

const Loading = () => {
	return (
		<img
			className='loading-spinner'
			src={LoadingSpinner}
			alt='Loading spinner'
		/>
	);
};

export default Loading;
