import { Link } from 'react-router-dom';
import classes from './LinkSearchInput.module.scss';

const LinkSearchInput: React.FC<{}> = () => {
	return (
		<Link to='/search' className={classes.linkSearchInput}>
			<input
				type='text'
				placeholder='Search...'
				className={classes.linkSearchInput__input}
			/>
		</Link>
	);
};

export default LinkSearchInput;
