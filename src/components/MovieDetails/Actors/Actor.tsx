import { Actor } from '../../../types/types';
import classes from './Actor.module.scss';

const ActorComponent: React.FC<{ actor: Actor }> = ({ actor }) => {
	return (
		<div className={classes.actor} key={actor.id}>
			<img
				className={classes.actor__img}
				src={actor.image.replace('original', '320x240')}
				alt={'Photo of ' + actor.name}
			/>
			<div className={classes.actor__box}>
				<h3 className={classes.actor__name}>{actor.name}</h3>
				<p className={classes.actor__character}>{actor.asCharacter}</p>
			</div>
		</div>
	);
};

export default ActorComponent;
