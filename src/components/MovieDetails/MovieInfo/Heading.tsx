import { Movie, MovieDetailsImdbData } from '../../../types/types';
import classes from './Heading.module.scss';
import AddToFavBtn from '../../UI/AddToFavBtn';

const Heading: React.FC<{ movie: MovieDetailsImdbData }> = ({ movie }) => {
  const movieObj: Movie = {
		id: movie.id,
		image: movie.image,
		title: movie.title,
		rating: movie.rating,
	};
  
	return (
		<div className={classes.heading}>
			<h2 className={classes.heading__boxTitle}>{movie.title}</h2>
			<p
				className={`${classes.heading__boxText} ${classes['heading__boxText--desktop']}`}
			>
				{movie.releaseDate}
			</p>
			<div className={classes.heading__favIcon}>
				<AddToFavBtn movie={movieObj} />
			</div>
		</div>
	);
};

export default Heading;
