import React, { useState, useCallback } from 'react';
import { Movie } from '../types/types';

const useFetchData = () => {
	const [fetchMovies, setFetchMovies] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = useCallback(async (
		event: React.FormEvent | null,
		url: string,
		enteredInput: string
	) => {
		event?.preventDefault();
		setFetchMovies([]);
		setIsLoading(true);
		try {
			const response = await fetch(`${url}${enteredInput}`);

			const data = await response.json();
			if (response.ok) {
				if (data.errorMessage !== '') {
					throw new Error(data.errorMessage);
				}
				data.results.forEach(function (movie: Movie) {
					const movieObject: Movie = {
						description: movie.description,
						id: movie.id,
						image: movie.image,
						title: movie.title,
					};
					setFetchMovies((prevState) => [...prevState, movieObject]);
				});
				setIsLoading(false);
			} else {
				throw new Error(data.errorMessage);
			}
		} catch (error) {
			alert(error);
		}
	}, []);

	return { fetchMovies, isLoading, getData };
};

export default useFetchData;