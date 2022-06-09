import { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Loading from '../UI/Loading';
import { MovieDetailsImdbData } from '../../types/types';
import './MovieDetails.scss';

const MovieDetails: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchMovies, setFetchMovies] = useState<MovieDetailsImdbData>();
	const params = useParams();
	const { id } = params;

	const getDetails = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await fetch(
				`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB_API_KEY}/${id}/FullActor,Trailer,Ratings,`
			);
			const data = await response.json();
			if (response.ok) {
				if (data.errorMessage !== '') {
					throw new Error(data.errorMessage);
				}
				const movieObject: MovieDetailsImdbData = {
					id: data.id,
					title: data.title,
					image: data.image,
					rating: data.imDbRating,
					metacriticsRating: data.metacriticsRating,
					releaseDate: data.year,
					similars: data.similars,
					directors: data.directors,
					genres: data.genres,
					backgroundImage: data.trailer.thumbnailUrl,
					plot: data.plot,
					actors: data.actorList,
				};
				setIsLoading(false);
				setFetchMovies(movieObject);
				return movieObject;
			} else {
				throw new Error(data.errorMessage);
			}
		} catch (error) {
			alert(error);
		}
	}, [id]);

	useEffect(() => {
		getDetails();
	}, [getDetails]);

	return (
		<div>
			<Navigation />
			<div className='wrapper details__container'>
				{isLoading && <Loading />}
				<img
					className='details__img'
					src={fetchMovies?.backgroundImage}
					alt=''
				/>
				<div className='details__boxes'>
					<div className='details__box'>
						<img className='details__box-img' src={fetchMovies?.image} alt='' />
					</div>
					<div className='details__box'>
						<h2>{fetchMovies?.title}</h2>
						<p>{fetchMovies?.plot}</p>
						<div className='details__box'>
							<p>{fetchMovies?.genres}</p>
							<p>{fetchMovies?.rating}</p>
							<p>{fetchMovies?.metacriticsRating}</p>
						</div>
					</div>
				</div>
				<div className='details__actor'>
					{fetchMovies?.actors.map((actor) => (
						<div className='details__actor'>
							<img className='details__actor-img' src={actor.image} alt='' />
							<div className='details__actor-box'>
								<h3 className='details__actor-name'>{actor.name}</h3>
								<p className='details__actor-character'>{actor.asCharacter}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
