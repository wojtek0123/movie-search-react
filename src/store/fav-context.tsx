import React, { useEffect, useState } from 'react';
import { Movie } from '../types/types';
import { IFavContext } from '../types/types';

const defaultState: IFavContext = {
	favouriteMovies: [],
	addToFav: (movie: Movie) => {},
	removeFromFav: (id: string) => {},
};

const FavContext = React.createContext<IFavContext>(defaultState);

const localStorageMovies = localStorage.getItem('movies');

export const FavContextProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	let initialState: Movie[] = [];
	if (localStorageMovies) {
		initialState = JSON.parse(localStorageMovies);
	}
	const [favouriteMovies, setFavouriteMovies] = useState<Movie[]>(initialState);

	useEffect(() => {
		console.log(favouriteMovies);
		localStorage.setItem('movies', JSON.stringify(favouriteMovies));
	}, [favouriteMovies])

	const addToFav = (movie: Movie) => {
		if (favouriteMovies.includes(movie)) {
			return;
		}
		setFavouriteMovies((prevState) => [...prevState, movie]);
	};

	const removeFromFav = (id: string) => {
		setFavouriteMovies((prevState) =>
			prevState.filter((movie) => movie.id !== id)
		);
	};

	const contextValue = {
		favouriteMovies: favouriteMovies,
		addToFav: addToFav,
		removeFromFav: removeFromFav,
	};

	return (
		<FavContext.Provider value={contextValue}>{children}</FavContext.Provider>
	);
};

export default FavContext;
