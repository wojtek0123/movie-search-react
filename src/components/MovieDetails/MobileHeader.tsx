import { Movie, MovieDetailsImdbData } from '../../types/types';
import AddToFavBtn from '../UI/AddToFavBtn';

const MobileHeader: React.FC<{
	movie: MovieDetailsImdbData | undefined;
}> = ({ movie }) => {
	if (movie === undefined) {
		return <></>;
	}
	const movieObj: Movie = {
		id: movie?.id,
		title: movie?.title,
		image: movie?.image,
		description: '',
	};

	return (
		<div className='details__con'>
			<h2 className='details__box-title-mobile'>{movie?.title}</h2>
			<p className='details__box-release-date-mobile'>{movie?.releaseDate}</p>
			<div className='details__mobile-fav-btn-container'>
				<AddToFavBtn movie={movieObj} />
			</div>
		</div>
	);
};

export default MobileHeader;
