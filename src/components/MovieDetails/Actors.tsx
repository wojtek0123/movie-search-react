import { Actor } from '../../types/types';
import ActorComponent from './Actor';

const NUMBER_OF_ACTORS_DISPLAYED = 24;

const Actors: React.FC<{ actors: Actor[] | undefined }> = ({ actors }) => {
	return (
		<>
			<h3 className='details__actors-title'>Actors</h3>
			<div className='details__actors wrapper'>
				{actors?.map((actor, index) => {
					if (index < NUMBER_OF_ACTORS_DISPLAYED) {
						return <ActorComponent actor={actor} key={actor.id} />;
					} else {
						return <div key={actor.id}></div>;
					}
				})}
			</div>
		</>
	);
};

export default Actors;
