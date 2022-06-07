import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';

function App() {
	return (
		<div className='wrapper app'>
			<Navigation />
			<h2>Top 10 Most populars movies</h2>
			<h2>Top 10 Most populars tv series</h2>
		</div>
	);
}

export default App;
