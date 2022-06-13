import Poster from './Poster';
import MovieInfo from './MovieInfo';
import { MovieDetailsImdbData } from '../../types/types';

const Container: React.FC<{ movie: MovieDetailsImdbData | undefined}> = ({
	movie,
}) => {
	return (
		<div className='details__boxes'>
			<Poster image={movie?.image} />
			<MovieInfo movie={movie} />
		</div>
	);
};

export default Container;
