import { Link } from 'react-router-dom';
import heart from '../../assets/images/heart-red.svg';
import classes from './WatchListBtn.module.scss';

const WatchListBtn: React.FC<{}> = () => {
	return (
		<Link to='/favourites' className={classes.watchListBtn}>
			<img src={heart} alt='Link to favourites movies and tv series' />
		</Link>
	);
};

export default WatchListBtn;
