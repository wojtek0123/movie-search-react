import heart from '../../assets/images/heart-solid.svg';
import './Card.scss';
import { useState } from 'react';
import { FetchImdbData } from '../../types/types';
import { Link } from 'react-router-dom';

const Card: React.FC<FetchImdbData> = (props) => {
	const [isFavourite, setIsFavourite] = useState(false);

	const changeIsFavouriteState = () => {
		if (isFavourite) {
			setIsFavourite(false);
		} else {
			setIsFavourite(true);
		}
	};

	return (
		<Link to={`/search/${props.id}`}>
			<div className='card'>
				<img src={props.image.replace('original', '640x800')} alt='' className='card__image' />
				<div className='card__container'>
					<div>
						<h2 className='card__container-title'>{props.title}</h2>
						<p className='card__container-text'>{props.description}</p>
					</div>
					<div onClick={changeIsFavouriteState}>
						<img
							src={heart}
							id='heart-icon'
							alt=''
							className={
								isFavourite
									? `card__container-icon fav`
									: `card__container-icon`
							}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
