import Card from './Card';
import './Cards.scss';
import { Movie } from '../../types/types';

const Cards: React.FC<{ movies: Movie[] }> = (props) => {
	return (
		<div className='cards'>
			{props.movies.map(movie => {
				return (
					<Card
						key={movie.id}
						movie={movie}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
