// import useFetchData from '../../hooks/use-fetch-data';
import Loading from '../UI/Loading';
import Cards from '../Cards/Cards';
import React, { useState, useCallback, useEffect } from 'react';
import './SectionPopular.scss';
import { Movie } from '../../types/types';

const PopularMovies: React.FC<{url: string, title: string}> = ({url, title}) => {
	// const { isLoading, fetchMovies, getData } = useFetchData();

	const [fetchMovies, setFetchMovies] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = useCallback(async (url: string) => {
		// event.preventDefault();
		setFetchMovies([]);
		setIsLoading(true);
		try {
			const response = await fetch(`${url}`);

			const data = await response.json();
			if (response.ok) {
				data.items.forEach(function (movie: Movie, index: number) {
					if (index < 10) {
						const movieObject: Movie = {
							description: movie.description,
							id: movie.id,
							image: movie.image.replace('original', '640x800'),
							title: movie.title,
						};
						setFetchMovies((prevState) => [...prevState, movieObject]);
					}
				});
				setIsLoading(false);
			} else {
				throw new Error(data.errorMessage);
			}
		} catch (error) {
			alert(error);
		}
	}, []);

		useEffect(() => {
			getData(url);
	}, [getData, url])

	return (
		<section className='wrapper popular-movies'>
			<h2>{title}</h2>
			{!isLoading && <Cards movies={fetchMovies} />}
			{isLoading && <Loading />}
		</section>
	);
};

export default PopularMovies;
