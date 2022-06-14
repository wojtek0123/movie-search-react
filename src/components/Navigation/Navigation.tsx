import React, { useState, useContext } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import classes from './Navigation.module.scss';
import searchIcon from '../../assets/images/glass-solid.svg';
import Hamburger from './Hamburger';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button';

const Navigation: React.FC<{}> = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);
	const authCtx = useContext(AuthContext);

	const location = useLocation();
	const { pathname } = location;

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
			<div className={classes.nav__wrapper}>
				<Hamburger onShowMenu={showMenuHandler} hideMenu={hideMenu} />
				{pathname !== '/search' && (
					<Link to='/search' className={classes.nav__linkSearch}>
						<input
							type='text'
							placeholder='Search...'
							className={classes.nav__searchInput}
						/>
					</Link>
				)}
				<div className={classes.nav__box}>
					{pathname !== '/search' && (
						<Link to='/search' className={classes.nav__link}>
							<img
								src={searchIcon}
								alt='search icon'
								className={classes.nav__searchIcon}
							/>
						</Link>
					)}

					{!authCtx.isLoggedIn && (
						<Link to='/login' className={classes.nav__logBtn}>
							Log In
						</Link>
					)}
					{authCtx.isLoggedIn && (
						<Button classes={true} onClick={authCtx.logout}>
							Log Out
						</Button>
					)}
				</div>
			</div>
			<div
				className={
					showMenu
						? `${classes.nav__linksMobile} ${classes.show}`
						: classes.nav__linksMobile
				}
				onClick={changeShowMenuState}
			>
				<div className={classes.nav__links}>
					<NavLink className={classes.nav__linkMobile} to='/'>
						Home
					</NavLink>
					<NavLink className={classes.nav__linkMobile} to='/search'>
						Search
					</NavLink>
					<NavLink className={classes.nav__linkMobile} to='/favourites'>
						Favourite
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
