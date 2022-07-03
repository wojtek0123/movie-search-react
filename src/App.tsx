import './App.scss';
import MovieTrailer from './components/MovieTrailer/MovieTrailer';
import Navigation from './components/Navigation/Navigation';
import PopularWrapper from './components/SectionPopular/PopularWrapper';

const App = () => {
	return (
		<div className='app wrapper'>
			<Navigation />
			<MovieTrailer titleId={undefined} />
			<PopularWrapper />
		</div>
	);
};

export default App;
