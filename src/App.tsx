import './App.scss';
import Navigation from './components/Navigation/Navigation';
import MovieTrailer from './components/MovieTrailer/MovieTrailer';
import PopularWrapper from './components/SectionPopular/PopularWrapper';

const App = () => {
	return (
		<div className='app wrapper'>
			<Navigation />
			<MovieTrailer />
			<PopularWrapper />
		</div>
	);
};

export default App;
