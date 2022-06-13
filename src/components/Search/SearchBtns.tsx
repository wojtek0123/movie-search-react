import Button from '../UI/Button';

const SearchBtns: React.FC<{
	onMovie: () => void;
	onTvSeries: () => void;
	movieClasses: string;
	tvSeriesClasses: string;
}> = ({ onMovie, onTvSeries, movieClasses, tvSeriesClasses }) => {
	return (
		<div className='search__box'>
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
