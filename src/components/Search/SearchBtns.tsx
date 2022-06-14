import Button from '../UI/Button';
import classes from './SearchBtns.module.scss';

const SearchBtns: React.FC<{
	onMovie: () => void;
	onTvSeries: () => void;
	movieClasses: boolean;
	tvSeriesClasses: boolean;
}> = ({ onMovie, onTvSeries, movieClasses, tvSeriesClasses }) => {
	return (
		<div className={classes.btns}>
			<Button onClick={onMovie} classes={movieClasses}>
				Movie
			</Button>
			<Button onClick={onTvSeries} classes={tvSeriesClasses}>
				Tv Series
			</Button>
		</div>
	);
};

export default SearchBtns;
