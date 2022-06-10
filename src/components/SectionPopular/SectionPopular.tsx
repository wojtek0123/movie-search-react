// import useFetchData from '../../hooks/use-fetch-data';
import Loading from '../UI/Loading';
import Cards from '../Search/Cards';
import React, { useState } from 'react';
import './SectionPopular.scss';
import { FetchImdbData } from '../../types/types';

const PopularMovies: React.FC<{url: string, title: string}> = ({url, title}) => {
	// const { isLoading, fetchMovies, getData } = useFetchData();

	const [fetchMovies, setFetchMovies] = useState<FetchImdbData[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async (url: string, event: React.FormEvent) => {
		event.preventDefault();
		setFetchMovies([]);
		setIsLoading(true);
		try {
			const response = await fetch(`${url}`);

			const data = await response.json();
			if (response.ok) {
				// if (data.errorMessage !== '') {
				// 	throw new Error(data.errorMessage);
				// }
				data.items.forEach(function (movie: FetchImdbData, index: number) {
					if (index < 10) {
						const movieObject: FetchImdbData = {
							description: movie.description,
							id: movie.id,
							image: movie.image,
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
	};

		// useEffect(() => {
			// getData(url);
	// }, [getData, url])

	return (
		<section className='wrapper popular-movies'>
			<h2>{title}</h2>
			<button onClick={event => getData(url, event)}>Click!</button>
			<Cards movies={fetchMovies} />
			{isLoading && <Loading />}
		</section>
	);
};

export default PopularMovies;
