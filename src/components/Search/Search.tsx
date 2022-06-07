import React, { useState } from 'react';
import Cards from './Cards';
import './Search.scss';
import { FetchData, Fetch } from '../../types/types';
import Loading from '../Loading/Loading';

const Search: React.FC<{}> = () => {
	const [enteredInput, setEnteredInput] = useState<String>('');
	const [fetchMovies, setFetchMovies] = useState<FetchData[]>([]);
	const [movieSearch, setMovieSearch] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const changeToMovieSearch = () => {
		setMovieSearch(false);
	};

	const changeToSerieSearch = () => {
		setMovieSearch(true);
	};

	const changeEnteredInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredInput(event.target.value);
	};

	const getMovies = async (event: React.FormEvent) => {
		event.preventDefault();
		setFetchMovies([]);
		setIsLoading(true);
		let url = 'https://imdb-api.com/en/API/SearchSeries/k_rfo8f00u/';

		if (movieSearch) {
			url = 'https://imdb-api.com/en/API/SearchMovie/k_rfo8f00u/';
		}

		try {
			const response = await fetch(`${url}${enteredInput}`);

			const data = await response.json();
			if (response.ok) {
				if (data.errorMessage.length !== 0) {
					throw new Error(data.errorMessage);
				}
				data.results.forEach(function (movie: Fetch) {
					const movieObject: FetchData = {
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
	};

	return (
		<form onSubmit={getMovies} className='wrapper search'>
			<h2>Movies or tv series from imdb search api </h2>
			<div>
				<button
					className='search__btn'
					type='button'
					onClick={changeToSerieSearch}
				>
					Movie
				</button>
				<button
					className='search__btn'
					type='button'
					onClick={changeToMovieSearch}
				>
					Series
				</button>
			</div>
			<input
				type='text'
				onInput={changeEnteredInput}
				placeholder={movieSearch ? 'Search a movie' : 'Search a tv serie'}
			/>
			<Cards movies={fetchMovies} />
			{isLoading && <Loading />}
		</form>
	);
};

export default Search;
