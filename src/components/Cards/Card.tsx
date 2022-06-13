import React from 'react';
import './Card.scss';
import { Movie } from '../../types/types';
import { Link } from 'react-router-dom';
import AddToFavBtn from '../UI/AddToFavBtn';
import CardBody from './CardBody';
import CardImage from './CardImage';

const Card: React.FC<{ movie: Movie }> = ({ movie }) => {
	return (
		<div className='card'>
			<Link to={`/${movie.id}`} className='card__link'>
				<CardImage movie={movie} />
				<CardBody movie={movie} />
			</Link>
			<AddToFavBtn movie={movie} />
		</div>
	);
};

export default Card;
