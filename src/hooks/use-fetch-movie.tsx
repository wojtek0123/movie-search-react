import { useState, useCallback } from 'react';
import { MovieDetailsImdbData } from '../types/types';

const useFetchMovie = () => {
	const [fetchMovie, setFetchMovie] = useState<MovieDetailsImdbData>();
	const [isLoading, setIsLoading] = useState(false);

  const getMovie = useCallback(async (id: string) => {
		setIsLoading(true);
		try {
			const response = await fetch(
				`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB_API_KEY}/${id}/FullActor,Trailer,Ratings,`
			);
			const data = await response.json();
			console.log(data);
			if (!response.ok || data.errorMessage !== null) {
				throw new Error(data.errorMessage);
			}

			// if (data.errorMessage.length !== '') {
			// 	throw new Error(data.errorMessage);
			// }

			const movieObject: MovieDetailsImdbData = {
				id: data.id || '',
				title: data.title,
				image: data.image.replace('original', '640x800') || '',
				rating: data.imDbRating || '',
				metacriticsRating: data.metacriticsRating || '',
				releaseDate: data.year || '',
				similars: data.similars || '',
				directors: data.directors || '',
				genres: data.genres || '',
				backgroundImage: data.trailer.thumbnailUrl || '',
				plot: data.plot || '',
				actors: data.actorList || '',
			};

			setFetchMovie(movieObject);
			setIsLoading(false);
			return movieObject;
		} catch (error) {
			alert(error);
		}
	}, []);

  return {fetchMovie, isLoading, getMovie}
};

export default useFetchMovie;
