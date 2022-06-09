import React from 'react';
import './App.scss';
import PopularMovies from './components/SectionPopular/SectionPopular';
import Navigation from './components/Navigation/Navigation';

function App() {
	return (
		<div className='wrapper app'>
			<Navigation />
			{/* <PopularMovies url='https://imdb-api.com/en/API/Top250Movies/k_rfo8f00u' title='Top 10 Most popular movies'/> */}
			{/* <PopularMovies url='https://imdb-api.com/en/API/MostPopularTVs/k_rfo8f00u' title='Top 10 Most populars tv series' /> */}
		</div>
	);
}

export default App;
