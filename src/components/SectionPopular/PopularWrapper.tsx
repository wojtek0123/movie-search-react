import PopularMovies from "./SectionPopular";
import { useState } from "react";

const popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_API_KEY}`;
const popularSeriesUrl = `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_IMDB_API_KEY}`;

const PopularWrapper: React.FC = () => {
  const [numberOf, setNumberOf] = useState<number>();
	const onMovies = (num: number) => {
		setNumberOf(num);
	};
	return (
		<div className=''>
			<PopularMovies
				url={popularMoviesUrl}
				title={`Top ${numberOf} Most popular movies`}
				onNumMoviesDisplayed={onMovies}
			/>
			<PopularMovies
				url={popularSeriesUrl}
				title={`Top ${numberOf} Most populars tv series`}
				onNumMoviesDisplayed={onMovies}
			/>
		</div>
	);
};

export default PopularWrapper;
