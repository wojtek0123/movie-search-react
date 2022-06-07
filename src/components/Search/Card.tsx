import heart from '../../assets/images/heart-solid.svg';
import './Card.scss';
import { useState } from 'react';
import { FetchData } from '../../types/types';

const Card: React.FC<FetchData> = (props) => {
	const [isFavourite, setIsFavourite] = useState(false);

	const changeIsFavouriteState = () => {
		if (isFavourite) {
			setIsFavourite(false);
		} else {
			setIsFavourite(true);
		}
	};

	return (
		<div className='card'>
			<img src={props.image} alt='' className='card__image' />
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
							isFavourite ? `card__container-icon fav` : `card__container-icon`
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;