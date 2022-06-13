import React, { useContext } from 'react';
import heart from '../../assets/images/heart-solid.svg';
import './AddToFavBtn.scss';
import FavContext from '../../store/fav-context';
import { Movie } from '../../types/types';

const AddToFavBtn: React.FC<{ movie: Movie | undefined; }> = ({ movie }) => {
	const favMoviesContext = useContext(FavContext);
	const { addToFav, removeFromFav, favouriteMovies } = favMoviesContext;

	let classes: string = `add-fav-btn`;

	const changeIsFavouriteState = () => {
		if (movie === undefined) {
			return
		}
		if (favouriteMovies.includes(movie)) {
			removeFromFav(movie.id);
		} else {
			addToFav(movie);
		}
	};

	favouriteMovies.forEach((favMovie) => {
		if (movie === undefined) {
			return;
		}
		if (favMovie.id === movie.id) {
			classes = 'add-fav-btn is-fav';
		} 
	});

	return (
		<button className={classes} onClick={changeIsFavouriteState} type='button'>
			<img
				src={heart}
				alt='Heart icon meaning add to favourites'
				className='add-fav-btn__fav-icon'
			/>
		</button>
	);
};

export default AddToFavBtn;
