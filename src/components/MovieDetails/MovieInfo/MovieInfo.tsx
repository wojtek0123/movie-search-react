import { MovieDetailsImdbData } from '../../../types/types';
import classes from './MovieInfo.module.scss';
import Heading from './Heading';
import MainText from './MainText';
import Rating from './Rating';

const MovieInfo: React.FC<{
	movie: MovieDetailsImdbData | undefined;
}> = ({ movie }) => {
	if (movie === undefined) {
		return <></>;
	}

	return (
		<div className={classes.movieInfo}>
			<Heading movie={movie} />
			<MainText movie={movie} />
			<Rating movie={movie} />
		</div>
	);
};

export default MovieInfo;
