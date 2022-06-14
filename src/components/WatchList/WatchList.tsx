import Navigation from '../Navigation/Navigation';
import classes from './WatchList.module.scss';
import { useContext } from 'react';
import FavContext from '../../store/fav-context';
import Cards from '../Cards/Cards';
import SectionTitle from '../UI/SectionTitle';

const WatchList: React.FC = () => {
	const favMoviesContext = useContext(FavContext);
	const { favouriteMovies } = favMoviesContext;

	return (
		<div className={classes.watchList}>
			<Navigation />
			<SectionTitle>Your Favourites Movies and Tv Series</SectionTitle>
			<Cards movies={favouriteMovies} />
		</div>
	);
};

export default WatchList;
