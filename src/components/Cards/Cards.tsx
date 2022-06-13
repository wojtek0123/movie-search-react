import Card from './Card';
import './Cards.scss';
import { Movie } from '../../types/types';

const Cards: React.FC<{ movies: Movie[] }> = ({ movies }) => {
	return (
		<div className='cards'>
			{movies.map((movie) => {
				return <Card key={movie.id} movie={movie} />;
			})}
		</div>
	);
};

export default Cards;
