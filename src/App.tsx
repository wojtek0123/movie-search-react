import './App.scss';
import Navigation from './components/Navigation/Navigation';
import PopularWrapper from './components/SectionPopular/PopularWrapper';

const App = () => {
	return (
		<div className='app wrapper'>
			<Navigation />
			<PopularWrapper />
		</div>
	);
};

export default App;
