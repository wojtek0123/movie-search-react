import PopularMovies from "./SectionPopular";

const popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_API_KEY}`;
const popularSeriesUrl = `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_IMDB_API_KEY}`;

const PopularWrapper: React.FC = () => {
	return (
		<div className=''>
			<PopularMovies
				url={popularMoviesUrl}
				title={`Top 12 Most popular movies`}
			/>
			<PopularMovies
				url={popularSeriesUrl}
				title={`Top 12 Most populars tv series`}
			/>
		</div>
	);
};

export default PopularWrapper;
