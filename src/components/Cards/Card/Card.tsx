import React from 'react';
import classes from './Card.module.scss';
import { Movie } from '../../../types/types';
import { Link } from 'react-router-dom';
import AddToFavBtn from '../../UI/AddToFavBtn';
import CardBody from './CardBody';
import CardImage from './CardImage';

const Card: React.FC<{ movie: Movie }> = ({ movie }) => {
	return (
		<div className={classes.card}>
			<Link to={`/${movie.id}`} className={classes.card__link}>
				<CardImage movie={movie} />
				<CardBody movie={movie} />
			</Link>
			<AddToFavBtn movie={movie} />
		</div>
	);
};

export default Card;
