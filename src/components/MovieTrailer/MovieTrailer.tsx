import { useEffect, useState, useCallback } from 'react';
import Header from '../UI/Header';
import ReactPlayer from 'react-player';
import Loading from '../UI/Loading';
import classes from './MovieTrailer.module.scss';

const COMING_SOON_URL = `https://imdb-api.com/en/API/ComingSoon/${process.env.REACT_APP_IMDB_API_KEY}`;
const YOUTUBE_TRAILER_URL = `https://imdb-api.com/en/API/YouTubeTrailer/${process.env.REACT_APP_IMDB_API_KEY}/`;

const MovieTrailer: React.FC<{ titleId: string | undefined }> = ({ titleId }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [videoUrl, setVideoUrl] = useState('');
	const [isError, setIsError] = useState(false);

	const getMovieId = useCallback(async () => {
		setIsLoading(true);

		try {
			const response = await fetch(COMING_SOON_URL);
			const data = await response.json();
			console.log(data);
			if (!response.ok || data.errorMessage !== '') {
				throw new Error(data.errorMessage);
			}
			return data.items[0].id;
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
			console.error(error);
		}
	}, []);

	const getMovieTrailer = useCallback(async () => {
		try {
			const movieId = titleId === undefined ? await getMovieId() : titleId;
			const response = await fetch(`${YOUTUBE_TRAILER_URL}${movieId}`);
			const data = await response.json();
			if (!response.ok || data.errorMessage !== '') {
				throw new Error(data.errorMessage);
			}
			setVideoUrl(data.videoUrl);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			console.error(error);
		}
	}, [titleId, getMovieId]);

	useEffect(() => {
		getMovieTrailer();
	}, [getMovieTrailer]);

	return (
		<Header>
			<div className={classes.movieTrailer}>
				{!isLoading && !isError && (
					<ReactPlayer
						url={videoUrl}
						playing={true}
						volume={0.5}
						width='100%'
						height='60vh'
						controls={true}
					/>
				)}
				{isLoading && <Loading />}
			</div>
		</Header>
	);
};

export default MovieTrailer;
