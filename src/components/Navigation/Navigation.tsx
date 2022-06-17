import React, { useState } from 'react';
import classes from './Navigation.module.scss';
import HamburgerMenu from './Hamburger/HamburgerMenu';
import NavigationWrapper from './NavigationWrapper/NavigationWrapper';

const Navigation: React.FC<{}> = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);

	const showMenuHandler = (show: boolean) => {
		setShowMenu(show);
		setHideMenu(false);
	};

	const changeShowMenuState = () => {
		setHideMenu(true);
		setShowMenu(false);
	};

	return (
		<nav className={classes.nav}>
			<NavigationWrapper
				hideMenu={hideMenu}
				showMenuHandler={showMenuHandler}
			/>
			<HamburgerMenu onShow={changeShowMenuState} showMenu={showMenu} />
		</nav>
	);
};

export default Navigation;
