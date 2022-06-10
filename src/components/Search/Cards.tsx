import Card from './Card';
import './Cards.scss';
import { FetchImdbData } from '../../types/types';

const Cards: React.FC<{ movies: FetchImdbData[] }> = (props) => {
	return (
		<div className='cards'>
			{props.movies.map((movie) => {
				return (
					<Card
						key={movie.id}
						description={movie.description}
						id={movie.id}
						image={movie.image.replace('original', '640x800')}
						title={movie.title}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
