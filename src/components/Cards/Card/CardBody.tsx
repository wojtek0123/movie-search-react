import { Movie } from '../../../types/types';
import classes from './CardBody.module.scss';

const CardBody: React.FC<{ movie: Movie }> = ({ movie }) => {
	return (
		<div className={classes.cardBody}>
			<h2 className={classes.cardBody__title}>{movie.title}</h2>
			<p className={classes.cardBody__text}>{movie.rating}</p>
		</div>
	);
};

export default CardBody;
