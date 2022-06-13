import { Movie } from '../../types/types';
import './CardBody.scss';

const CardBody: React.FC<{ movie: Movie }> = ({ movie }) => {
	return (
		<div className='card-body'>
			<div>
				<h2 className='card-body__title'>{movie.title}</h2>
				<p className='card-body__text'>{movie.description}</p>
			</div>
		</div>
	);
};

export default CardBody;
