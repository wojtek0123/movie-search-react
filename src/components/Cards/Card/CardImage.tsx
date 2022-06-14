import { Movie } from '../../../types/types';
import classes from './CardImage.module.scss';

const CardImage: React.FC<{ movie: Movie }> = ({ movie }) => {
	return (
		<img
			src={movie.image.replace('original', '640x800')}
			alt=''
			className={classes.cardImage}
		/>
	);
};

export default CardImage;
