import React, { useState } from 'react';
import Cards from './Cards';
import './Search.scss';
import Loading from '../UI/Loading';
import useFetchData from '../../hooks/use-fetch-data';
import UndoButton from '../UI/UndoButton';

const Search: React.FC<{}> = () => {
	const [enteredInput, setEnteredInput] = useState<string>('');
	const [movieSearch, setMovieSearch] = useState(true);
	const [url, setUrl] = useState(
		`https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_IMDB_API_KEY}/`
	);
	const { isLoading, fetchMovies, getData } = useFetchData();

	const changeToMovieSearch = () => {
		setMovieSearch(false);
		setUrl(
			`https://imdb-api.com/en/API/SearchSeries/${process.env.REACT_APP_IMDB_API_KEY}/`
		);
	};

	const changeToSerieSearch = () => {
		setMovieSearch(true);
		setUrl(
			`https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_IMDB_API_KEY}/`
		);
	};

	const changeEnteredInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredInput(event.target.value);
	};

	return (
		<form
			onSubmit={(event) => getData(event, url, enteredInput)}
			className='wrapper search'
		>
			<UndoButton />
			{/* <h2>Search movies or tv series from IMDB API</h2> */}
			<div className='search__box'>
				<button
					className={movieSearch ? 'search__btn active' : 'search__btn'}
					type='button'
					onClick={changeToSerieSearch}
				>
					Movie
				</button>
				<button
					className={movieSearch ? 'search__btn' : 'search__btn active'}
					type='button'
					onClick={changeToMovieSearch}
				>
					Series
				</button>
			</div>
			<input
				className='search__input'
				type='text'
				onInput={changeEnteredInput}
				placeholder={movieSearch ? 'Search a movie' : 'Search a tv serie'}
				autoFocus
			/>
			{!isLoading && <Cards movies={fetchMovies} />}
			{isLoading && <Loading />}
		</form>
	);
};

export default Search;
