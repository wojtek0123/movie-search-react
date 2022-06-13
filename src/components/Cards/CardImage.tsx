import { Movie } from '../../types/types';
import './CardImage.scss';

const CardImage: React.FC<{ movie: Movie }> = ({ movie }) => {
	return (
		<img
			src={movie.image.replace('original', '640x800')}
			alt=''
			className='card-image'
		/>
	);
};

export default CardImage;
