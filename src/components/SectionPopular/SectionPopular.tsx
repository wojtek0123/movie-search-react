// import useFetchData from '../../hooks/use-fetch-data';
import Loading from '../UI/Loading';
import Cards from '../Cards/Cards';
import React, { useState, useCallback, useEffect } from 'react';
import classes from './SectionPopular.module.scss';
import { Movie } from '../../types/types';
import SectionTitle from '../UI/SectionTitle';

const NUMBER_OF_MOVIES_DISPLAYED = 12;

const PopularMovies: React.FC<{ url: string; title: string }> = ({
	url,
	title,
}) => {
	const [fetchMovies, setFetchMovies] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = useCallback(async (url: string) => {
		setFetchMovies([]);
		setIsLoading(true);
		try {
			const response = await fetch(`${url}`);

			const data = await response.json();
			if (response.ok) {
				data.items.forEach(function (movie: Movie, index: number) {
					if (index < NUMBER_OF_MOVIES_DISPLAYED) {
						const movieObject: Movie = {
							rating: movie.rating,
							id: movie.id,
							image: movie.image.replaceAll('128', '640').replace('176', '800'),
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
	}, [getData, url]);

	return (
		<section className={classes.sectionPopular}>
			<SectionTitle>{title}</SectionTitle>
			{!isLoading && <Cards movies={fetchMovies} />}
			{isLoading && <Loading />}
		</section>
	);
};

export default PopularMovies;
