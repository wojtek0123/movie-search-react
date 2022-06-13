import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Loading from '../UI/Loading';
import './MovieDetails.scss';
import Actors from './Actors';
import BackgroundImage from './BackgroundImage';
import MobileHeader from './MobileHeader';
import useFetchMovie from '../../hooks/use-fetch-movie';
import Similars from './Similars';
import Container from './Container';

const MovieDetails: React.FC = () => {
	const params = useParams();
	const { id } = params;

	const { fetchMovie, isLoading, getMovie } = useFetchMovie();

	useEffect(() => {
		getMovie(id!);
	}, [getMovie, id]);

	return (
		<div>
			<Navigation />
			<div className='wrapper details'>
				{isLoading && <Loading />}
				{!isLoading && (
					<>
						<BackgroundImage image={fetchMovie?.backgroundImage} />
						<MobileHeader
							movie={fetchMovie}
						/>
						<Container movie={fetchMovie} />
						<Similars />
						
						<Actors actors={fetchMovie?.actors} />
					</>
				)}
			</div>
		</div>
	);
};

export default MovieDetails;
