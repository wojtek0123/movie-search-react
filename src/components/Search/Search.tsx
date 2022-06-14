import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import classes from './Search.module.scss';
import Loading from '../UI/Loading';
import useFetchData from '../../hooks/use-fetch-movies';
import UndoButton from '../UI/UndoButton';
import SearchBtns from './SearchBtns';
import SearchTextInput from './SearchTextInput';

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

	useEffect(() => {
		const delayInputTyping = setTimeout(() => {
			if (enteredInput.length !== 0) {
				getData(url, enteredInput);
			}
		}, 500);

		return () => clearTimeout(delayInputTyping);
	}, [getData, enteredInput, url]);

	const changeEnteredInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredInput(event.target.value);
	};

	return (
		<div className={classes.search}>
			<UndoButton />
			<SearchBtns
				onMovie={changeToSerieSearch}
				onTvSeries={changeToMovieSearch}
				movieClasses={movieSearch ? true : false}
				tvSeriesClasses={movieSearch ? false : true}
			/>
			<SearchTextInput
				onChangeInput={changeEnteredInput}
				placeholder={movieSearch ? 'Search a movie' : 'Search a tv serie'}
			/>
			{!isLoading && <Cards movies={fetchMovies} />}
			{isLoading && <Loading />}
		</div>
	);
};

export default Search;
