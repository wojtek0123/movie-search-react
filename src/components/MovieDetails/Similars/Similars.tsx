import { Movie } from '../../../types/types';
import Cards from '../../Cards/Cards';
import SectionTitle from '../../UI/SectionTitle';
import classes from './Similars.module.scss';

const Similars: React.FC<{ movies: Movie[] | undefined }> = ({ movies }) => {
	console.log(movies);

	if (movies === undefined) {
		return <></>;
	}

	return (
		<section className={classes.similars}>
			<SectionTitle>Similars</SectionTitle>
			<Cards movies={movies} />
		</section>
	);
};

export default Similars;
