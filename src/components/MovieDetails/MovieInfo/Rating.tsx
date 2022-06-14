import { MovieDetailsImdbData } from '../../../types/types';
import classes from './Rating.module.scss';

const Rating: React.FC<{ movie: MovieDetailsImdbData }> = ({ movie }) => {
	return (
		<div className={classes.rating}>
			<p className={classes.rating__boxText}>{`Genre: ${movie.genres}`}</p>
			<p className={classes.rating__boxText}>{`Rating: ${movie.rating}`}</p>
			<p className={classes.rating__boxText}>
				{`Metacritics: ${movie.metacriticsRating}`}
			</p>
		</div>
	);
};

export default Rating;
