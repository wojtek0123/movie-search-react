import { Actor } from '../../types/types';

const ActorComponent: React.FC<{ actor: Actor }> = ({ actor }) => {
	return (
		<div className='details__actor' key={actor.id}>
			<img
				className='details__actor-img'
				src={actor.image.replace('original', '320x240')}
				alt={'Photo of ' + actor.name}
			/>
			<div className='details__actor-box'>
				<h3 className='details__actor-name'>{actor.name}</h3>
				<p className='details__actor-character'>{actor.asCharacter}</p>
			</div>
		</div>
	);
};

export default ActorComponent;
