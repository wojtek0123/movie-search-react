import Poster from './Poster';
import MovieInfo from './MovieInfo/MovieInfo';
import { MovieDetailsImdbData } from '../../types/types';
import classes from './Container.module.scss';

const Container: React.FC<{ movie: MovieDetailsImdbData | undefined }> = ({
	movie,
}) => {
	return (
		<div className={classes.container}>
			<Poster image={movie?.image} />
			<MovieInfo movie={movie} />
		</div>
	);
};

export default Container;
