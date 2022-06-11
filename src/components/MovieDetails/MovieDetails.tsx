import { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Loading from '../UI/Loading';
import { MovieDetailsImdbData } from '../../types/types';
import './MovieDetails.scss';

const NUMBER_OF_ACTORS_DISPLAYED = 24;

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
				const movieObject: MovieDetailsImdbData = {
					id: data.id,
					title: data.title,
					image: data.image.replace('original', '640x800'),
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
			<div className='wrapper details'>
				{isLoading && <Loading />}
				<img
					className='details__img'
					src={fetchMovies?.backgroundImage}
					alt={`One of images from movie`}
				/>
				<h2 className='details__box-title-mobile'>{fetchMovies?.title}</h2>
				<p className='details__box-release-date-mobile'>
					{fetchMovies?.releaseDate}
				</p>
				<div className='details__boxes'>
					<div className='details__box details__box-center-img'>
						<img className='details__box-img' src={fetchMovies?.image} alt='' />
					</div>
					<div className='details__box details__box-padding'>
						<div>
							<h2 className='details__box-title-desktop'>
								{fetchMovies?.title}
							</h2>
							<p className='details__box-release-date-desktop'>
								{fetchMovies?.releaseDate}
							</p>
						</div>
						<div>
							<p className='details__box-text'>{fetchMovies?.plot}</p>
							<p className='details__box-directors'>{`Directors: ${fetchMovies?.directors}`}</p>
						</div>
						<div className='details__box details__box-stats'>
							<p className='details__box-genres'>{fetchMovies?.genres}</p>
							<p className='details__box-rating'>{`Rating: ${fetchMovies?.rating}`}</p>
							<p className='details__box-meta-rating'>
								{`Metacritics: ${fetchMovies?.metacriticsRating}`}
							</p>
						</div>
					</div>
				</div>
				{/* SIMILARS */}
				{!isLoading && <h3 className='details__actors-title'>Actors</h3>}
				<div className='details__actors wrapper'>
					{fetchMovies?.actors.map((actor, index) => {
						if (index < NUMBER_OF_ACTORS_DISPLAYED) {
							return (
								<div className='details__actor' key={index}>
									<img
										className='details__actor-img'
										src={actor.image.replace('original', '320x240')}
										alt={'Photo of ' + actor.name}
									/>
									<div className='details__actor-box'>
										<h3 className='details__actor-name'>{actor.name}</h3>
										<p className='details__actor-character'>
											{actor.asCharacter}
										</p>
									</div>
								</div>
							);
						} else {
							return <></>;
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
