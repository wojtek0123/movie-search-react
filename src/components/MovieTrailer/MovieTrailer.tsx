import { useEffect, useState, useCallback } from 'react';
import Header from '../UI/Header';
import ReactPlayer from 'react-player';
import Loading from '../UI/Loading';
import classes from './MovieTrailer.module.scss';

const url = `https://imdb-api.com/en/API/ComingSoon/${process.env.REACT_APP_IMDB_API_KEY}`;
const url2 = `https://imdb-api.com/en/API/YouTubeTrailer/${process.env.REACT_APP_IMDB_API_KEY}/`;

const MovieTrailer: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [videoUrl, setVideoUrl] = useState('');

	const getMovieId = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (response.ok) {
				return data.items[0].id;
			} else {
				setIsLoading(false);
				throw new Error(data.errorMessage);
			}
		} catch (error) {
			alert(error);
		}
	};

	const getMovieTrailer = useCallback(async () => {
		try {
			const movieId = await getMovieId();
			const response = await fetch(`${url2}${movieId}`);
			const data = await response.json();
			if (response.ok) {
				setVideoUrl(data.videoUrl);
			} else {
				throw new Error(data.errorMessage);
			}
			setIsLoading(false);
		} catch (error) {
			alert(error);
		}
	}, []);

	useEffect(() => {
		getMovieTrailer();
	}, [getMovieTrailer]);
	return (
		<Header>
			<div className={classes.movieTrailer}>
				{!isLoading && (
					<ReactPlayer
						url={videoUrl}
						playing={true}
						width='100%'
						height='75vh'
						controls={true}
					/>
				)}
				{isLoading && <Loading />}
			</div>
		</Header>
	);
};

export default MovieTrailer;