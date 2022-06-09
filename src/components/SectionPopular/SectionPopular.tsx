import useFetchData from '../../hooks/use-fetch-data';
import Loading from '../UI/Loading';
import Cards from '../Search/Cards';
import { useEffect } from 'react';
import './SectionPopular.scss';

const PopularMovies: React.FC<{url: string, title: string}> = ({url, title}) => {
	const { isLoading, fetchMovies, getData } = useFetchData();

	useEffect(() => {
			getData(null, url, '');
	}, [getData, url])

	return (
		<section className='wrapper popular-movies'>
			<h2>{title}</h2>
			<Cards movies={fetchMovies} />
			{isLoading && <Loading />}
		</section>
	);
};

export default PopularMovies;
