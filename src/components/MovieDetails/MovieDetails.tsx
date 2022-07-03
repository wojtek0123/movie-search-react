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
import Rating from './MovieInfo/Rating';
import MovieTrailer from '../MovieTrailer/MovieTrailer';

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
					<MovieTrailer titleId={fetchMovie?.id} />
					<main>
						<MobileTitle movie={fetchMovie} />
						<Container movie={fetchMovie} />
						<div className={classes.details__box}>
							<Rating movie={fetchMovie} />
						</div>
						<Similars movies={fetchMovie?.similars} />
						<Actors actors={fetchMovie?.actors || []} />
					</main>
				</>
			)}
		</div>
	);
};

export default MovieDetails;
