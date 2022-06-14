import Card from './Card/Card';
import classes from './Cards.module.scss';
import { Movie } from '../../types/types';

const Cards: React.FC<{ movies: Movie[] }> = ({ movies }) => {
	return (
		<div className={classes.cards}>
			{movies.map((movie) => {
				return <Card key={movie.id} movie={movie} />;
			})}
		</div>
	);
};

export default Cards;
