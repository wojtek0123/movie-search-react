import './App.scss';
import PopularMovies from './components/SectionPopular/SectionPopular';
import Navigation from './components/Navigation/Navigation';

const App = () => {
	return (
		<div className='app wrapper'>
			<Navigation />
			<PopularMovies
				url={`https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_API_KEY}`}
				title='Top 10 Most popular movies'
			/>
			<PopularMovies
				url={`https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_IMDB_API_KEY}`}
				title='Top 10 Most populars tv series'
			/>
		</div>
	);
};

export default App;
