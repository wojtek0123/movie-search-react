import { useEffect, useState } from 'react';
import classes from './Hamburger.module.scss';

const Hamburger: React.FC<{
	onShowMenu: (isShown: boolean) => void;
	hideMenu: boolean;
}> = (props) => {
	const [isShown, setIsShown] = useState(true);

	const changeShowState = () => {
		if (!isShown) {
			setIsShown(true);
		} else {
			setIsShown(false);
		}

		props.onShowMenu(isShown);
	};

	useEffect(() => {
		if (props.hideMenu) {
			setIsShown(true);
		}
	}, [props.hideMenu]);

	return (
		<div
			className={
				isShown ? classes.hamburger : `${classes.hamburger} ${classes.active}`
			}
			onClick={changeShowState}
		>
			<div className={classes.hamburger__bar}></div>
		</div>
	);
};

export default Hamburger;
