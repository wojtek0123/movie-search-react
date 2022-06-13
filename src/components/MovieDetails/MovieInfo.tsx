import { MovieDetailsImdbData } from '../../types/types';
import AddToFavBtn from '../UI/AddToFavBtn';
import { Movie } from '../../types/types';

const MovieInfo: React.FC<{
	movie: MovieDetailsImdbData | undefined;
}> = ({ movie }) => {
	if (movie === undefined) {
		return <></>;
	} 

	const movieObj: Movie = {
		id: movie!.id,
		image: movie!.image,
		title: movie!.title,
		description: ''
	}


	return (
		<div className='details__box details__box-padding'>
			<div className='details__con'>
				<h2 className='details__box-title-desktop'>{movie?.title}</h2>
				<p className='details__box-release-date-desktop'>{movie?.releaseDate}</p>
				<div className='details__fav-icon'>
					<AddToFavBtn movie={movieObj} />
				</div>
			</div>
			<div>
				<p className='details__box-text'>{movie?.plot}</p>
				<p className='details__box-directors'>{`Directors: ${movie?.directors}`}</p>
			</div>
			<div className='details__box details__box-stats'>
				<p className='details__box-genres'>{movie?.genres}</p>
				<p className='details__box-rating'>{`Rating: ${movie?.rating}`}</p>
				<p className='details__box-meta-rating'>
					{`Metacritics: ${movie?.metacriticsRating}`}
				</p>
			</div>
		</div>
	);
};
export default MovieInfo;
