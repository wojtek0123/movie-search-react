import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Loading from '../UI/Loading';
import classes from './MovieDetails.module.scss';
import Actors from './Actors/Actors';
import MobileTitle from './MobileTitle';
import useFetchMovie from '../../hooks/use-fetch-movie';
import Similars from './Similars/Similars';
import Container from './Container';
import Header from '../UI/Header';
import Rating from './MovieInfo/Rating';

const MovieDetails: React.FC = () => {
	const params = useParams();
	const { id } = params;

	const { fetchMovie, isLoading, getMovie } = useFetchMovie();

	useEffect(() => {
		getMovie(id!);
	}, [getMovie, id]);

	return (
		<div className={classes.details}>
			<Navigation />
			{isLoading && <Loading />}
			{!isLoading && (
				<>
					<Header>
						<img
							className={classes.details__img}
							src={fetchMovie?.backgroundImage}
							alt={`One of images from movie`}
						/>
					</Header>
					<main>
						<MobileTitle movie={fetchMovie} />
						<Container movie={fetchMovie} />
						<div className={classes.details__box}>
							<Rating movie={fetchMovie} />
						</div>
						<Similars movies={fetchMovie?.similars} />
						<Actors actors={fetchMovie?.actors} />
					</main>
				</>
			)}
		</div>
	);
};

export default MovieDetails;
