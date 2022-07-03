import React, { useState } from 'react';
import { Actor } from '../../../types/types';
import ActorComponent from './Actor';
import classes from './Actors.module.scss';
import SectionTitle from '../../UI/SectionTitle';

const NUMBER_OF_ACTORS_DISPLAYED = 24;

const Actors: React.FC<{ actors: Actor[] }> = ({ actors }) => {
	const [numberOfActors, setNumberOfActors] = useState(
		NUMBER_OF_ACTORS_DISPLAYED
	);

	const showMoreActors = () => {
		if (numberOfActors <= actors?.length) {
			setNumberOfActors((prevState) => prevState + 10);
		}
	};

	const showLessActors = () => {
		if (numberOfActors >= 34) {
			setNumberOfActors((prevState) => prevState - 10);
		}
	};

	return (
		<section className={classes.actors}>
			<SectionTitle>Actors</SectionTitle>
			<div className={classes.actors__container}>
				{actors?.map((actor, index) => {
					if (index < numberOfActors) {
						return <ActorComponent actor={actor} key={actor.id} />;
					} else {
						return <React.Fragment key={actor.id} />;
					}
				})}
				<div className={classes.actors__box}>
					{numberOfActors > 30 && (
						<button className={classes.actors__btn} onClick={showLessActors}>
							Show less
						</button>
					)}
					{numberOfActors < actors.length && (
						<button className={classes.actors__btn} onClick={showMoreActors}>
							Show more
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default Actors;
