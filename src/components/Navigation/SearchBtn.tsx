import { Link, useLocation } from 'react-router-dom';
import classes from './SearchBtn.module.scss';
import searchIcon from '../../assets/images/glass-solid.svg';

const SearchBtn: React.FC = () => {
	const location = useLocation();
	const { pathname } = location;
	return (
		<>
			{pathname !== '/search' && (
				<Link to='/search' className={classes.searchBtn}>
					<img
						src={searchIcon}
						alt='search icon'
						className={classes.searchBtn__icon}
					/>
				</Link>
			)}
		</>
	);
};

export default SearchBtn;
