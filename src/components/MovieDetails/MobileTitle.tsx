import { Movie, MovieDetailsImdbData } from '../../types/types';
import AddToFavBtn from '../UI/AddToFavBtn';
import classes from './MobileTitle.module.scss';

const MobileTitle: React.FC<{
	movie: MovieDetailsImdbData | undefined;
}> = ({ movie }) => {
	if (movie === undefined) {
		return <></>;
	}
	const movieObj: Movie = {
		id: movie?.id,
		title: movie?.title,
		image: movie?.image,
		rating: movie?.rating,
	};

	return (
		<div className={classes.mobileTitle}>
			<h2 className={classes.mobileTitle__title}>{movie?.title}</h2>
			<p className={classes.mobileTitle__text}>{movie?.releaseDate}</p>
			<div className={classes.mobileTitle__watchListBtn}>
				<AddToFavBtn movie={movieObj} />
			</div>
		</div>
	);
};

export default MobileTitle;
