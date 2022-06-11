import Navigation from '../Navigation/Navigation';
import './FavouriteMovies.scss';
import { useContext } from 'react';
import FavContext from '../../store/fav-context';
import Cards from '../Cards/Cards';

const FavouriteMovies: React.FC = () => {
	const favMoviesContext = useContext(FavContext);
	const { favouriteMovies } = favMoviesContext;

	return (
		<div className='favourites wrapper'>
			<Navigation />
			<Cards movies={favouriteMovies} />
		</div>
	);
};

export default FavouriteMovies;
