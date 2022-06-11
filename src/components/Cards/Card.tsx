import heart from '../../assets/images/heart-solid.svg';
import './Card.scss';
import React, { useState, useContext } from 'react';
import { Movie } from '../../types/types';
import { Link } from 'react-router-dom';
import FavContext from '../../store/fav-context';

const Card: React.FC<{ movie: Movie }> = ({ movie }) => {
	let classes: string = `card__icon-box`;

	const favMoviesContext = useContext(FavContext);
	const { addToFav, removeFromFav, favouriteMovies } = favMoviesContext;

	const changeIsFavouriteState = (event: React.FormEvent) => {
		event.stopPropagation();

		if (favouriteMovies.includes(movie)) {
			removeFromFav(movie.id);
		} else {
			addToFav(movie);
		}
	};

	favouriteMovies.forEach(favMovie => {
		if (favMovie.id === movie.id) {
			classes = `card__icon-box is-fav`;
		} else {
			classes = `card__icon-box`;
		}
	});

	return (
		<div className='card'>
			<Link to={`/${movie.id}`} className='card__link'>
				<img
					src={movie.image.replace('original', '640x800')}
					alt=''
					className='card__image'
				/>
				<div className='card__container'>
					<div>
						<h2 className='card__container-title'>{movie.title}</h2>
						<p className='card__container-text'>{movie.description}</p>
					</div>
				</div>
			</Link>
			<button
				className={classes}
				onClick={(event) => changeIsFavouriteState(event)}
			>
				<img
					src={heart}
					id='heart-icon'
					alt='Heart icon meaning add to favourites'
					className='card__fav-icon'
				/>
			</button>
		</div>
	);
};

export default Card;
