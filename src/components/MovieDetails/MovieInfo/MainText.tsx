import { MovieDetailsImdbData } from '../../../types/types';
import classes from './MainText.module.scss';

const MainText: React.FC<{ movie: MovieDetailsImdbData }> = ({ movie }) => {
	return <p className={classes.mainText__boxText}>{movie.plot}</p>;
};

export default MainText;
