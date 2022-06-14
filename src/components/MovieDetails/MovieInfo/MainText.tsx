import { MovieDetailsImdbData } from '../../../types/types';
import classes from './MainText.module.scss';

const MainText: React.FC<{ movie: MovieDetailsImdbData }> = ({ movie }) => {
	return (
		<>
			<p className={classes.mainText__boxText}>{movie.plot}</p>
			<p
				className={classes.mainText__boxText}
			>{`Directors: ${movie?.directors}`}</p>
		</>
	);  
};

export default MainText;
