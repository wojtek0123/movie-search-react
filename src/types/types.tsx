export type Movie = {
	description: string;
	id: string;
	image: string;
	title: string;
};

export type MovieDetailsImdbData = {
	id: string;
	title: string;
	image: string;
	rating: string;
	metacriticsRating: string;
	releaseDate: string;
	similars: string[];
	directors: string;
	genres: string;
	backgroundImage: string;
	plot: string;
	actors: Actor[];
};

export type MovieTrailer = {
	id: string;
	videoId: string;
	videoUrl: string;
};

export type Actor = {
	id: string;
	name: string;
	asCharacter: string;
	image: string;
};

export interface IFavContext {
	favouriteMovies: {
		id: string;
		image: string;
		description: string;
		title: string;
	}[];
	addToFav: (movie: Movie) => void;
	removeFromFav: (id: string) => void;
}

export interface IAuthContext {
	token: string | null | undefined;
	isLoggedIn: boolean;
	login: (token: string, expirationTime: string) => void;
	logout: () => void;
}
