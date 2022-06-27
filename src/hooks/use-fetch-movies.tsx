import { useState, useCallback } from 'react';
import { Movie } from '../types/types';

const useFetchData = () => {
	const [fetchMovies, setFetchMovies] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = useCallback(async (url: string, enteredInput: string) => {
		setFetchMovies([]);
		setIsLoading(true);
		try {
			const response = await fetch(`${url}${enteredInput}`);

			const data = await response.json();
			if (!response.ok || data.errorMessage !== '') {
				throw new Error(data.errorMessage);
			}

			data.results.forEach(function (movie: Movie) {
				const movieObject: Movie = {
					rating: movie.rating || '',
					id: movie.id || '',
					image: movie.image || '',
					title: movie.title || '',
				};
				setFetchMovies(prevState => [...prevState, movieObject]);
			});
			setIsLoading(false);
		} catch (error) {
			alert(error);
		}
	}, []);

	return { fetchMovies, isLoading, getData };
};

export default useFetchData;
