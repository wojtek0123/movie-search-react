import React from 'react';
import { Actor } from '../../../types/types';
import ActorComponent from './Actor';
import classes from './Actors.module.scss';
import SectionTitle from '../../UI/SectionTitle';

const NUMBER_OF_ACTORS_DISPLAYED = 24;

const Actors: React.FC<{ actors: Actor[] | undefined }> = ({ actors }) => {
	return (
		<section className={classes.actors}>
			<SectionTitle>Actors</SectionTitle>
			<div className={classes.actors__container}>
				{actors?.map((actor, index) => {
					if (index < NUMBER_OF_ACTORS_DISPLAYED) {
						return <ActorComponent actor={actor} key={actor.id} />;
					} else {
						return <React.Fragment key={actor.id} />;
					}
				})}
			</div>
		</section>
	);
};

export default Actors;
