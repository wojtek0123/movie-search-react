import { MovieDetailsImdbData } from '../../../types/types';
import classes from './Rating.module.scss';

const Rating: React.FC<{ movie: MovieDetailsImdbData | undefined}> = ({ movie }) => {
	if (movie === undefined) {
		<></>
	}

	return (
		<div className={classes.rating}>
			<p
				className={classes.rating__boxText}
			>{`Directors: ${movie?.directors}`}</p>
			<p className={classes.rating__boxText}>{`Genre: ${movie?.genres}`}</p>
			<p className={classes.rating__boxText}>{`Rating: ${movie?.rating} / 10`}</p>
			{/* <p className={classes.rating__boxText}>
				{`Metacritics: ${movie.metacriticsRating} / 100`}
			</p> */}
		</div>
	);
};

export default Rating;
