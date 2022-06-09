export type FetchImdbData = {
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
	actors: {
		name: string;
		asCharacter: string;
		image: string;
	}[];
}
