import { useEffect, useState, useCallback } from 'react';
import Header from '../UI/Header';
import ReactPlayer from 'react-player';
import Loading from '../UI/Loading';
import classes from './MovieTrailer.module.scss';

const url = `https://imdb-api.com/en/API/ComingSoon/${process.env.REACT_APP_IMDB_API_KEY}`;
const url2 = `https://imdb-api.com/en/API/YouTubeTrailer/${process.env.REACT_APP_IMDB_API_KEY}/`;

const MovieTrailer: React.FC<{ titleId: string | undefined }> = ({
	titleId,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [videoUrl, setVideoUrl] = useState('');

	const getMovieId = useCallback(async () => {
		setIsLoading(true);
		if (titleId !== undefined) {
			return titleId;
		}

		try {
			const response = await fetch(url);
			const data = await response.json();
			if (!response.ok || data.errorMessage !== null) {
				throw new Error(data.errorMessage);
			}
			return data.items[0].id;
		} catch (error) {
			alert(error);
		}
	}, [titleId]);

	const getMovieTrailer = useCallback(async () => {
		try {
			const movieId = await getMovieId();
			const response = await fetch(`${url2}${movieId}`);
			const data = await response.json();
			if (!response.ok || data.errorMessage !== '') {
				setIsLoading(false)
				throw new Error(data.errorMessage);
			}
			setVideoUrl(data.videoUrl);
			setIsLoading(false);
		} catch (error) {
			alert(error);
		}
	}, [getMovieId]);

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
