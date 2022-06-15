import { useState } from 'react';
import warning from '../../assets/images/circle-exclamation-solid.svg';
import classes from './PasswordRequirement.module.scss';

const PasswordRequirement: React.FC<{
	onClick: (state: boolean) => void;
}> = ({onClick}) => {
	const [isHidden, setIsHidden] = useState(true);

  onClick(isHidden);

	const changeState = () => {
		setIsHidden((prevState) => !prevState);
	};

	return (
		<div className={classes.passwordRequirement} onClick={changeState}>
			<img
				src={warning}
				alt='Password requirements!'
				className={classes.passwordRequirement__image}
			/>
		</div>
	);
};

export default PasswordRequirement;
