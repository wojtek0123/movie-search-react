import Card from './Card';
import './Cards.scss';
import { FetchData } from '../../types/types';

const Cards: React.FC<{ movies: FetchData[] }> = (props) => {
	return (
		<div className='cards'>
			{props.movies.map(movie => {
				return (
					<Card
					key={movie.id}
						description={movie.description}
						id={movie.id}
						image={movie.image}
						title={movie.title}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
