import React, { useState, useContext } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navigation.scss';
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
		<nav className='nav'>
			<div className='nav__wrapper'>
				<Hamburger onShowMenu={showMenuHandler} hideMenu={hideMenu} />
				{pathname !== '/search' && (
					<Link to='/search' className='nav__link-search'>
						<input
							type='text'
							placeholder='Search...'
							className='nav__search-input'
						/>
					</Link>
				)}
				<div className='nav__box'>
					{pathname !== '/search' && (
						<Link to='/search' className='nav__link'>
							<img
								src={searchIcon}
								alt='search icon'
								className='nav__search-icon'
							/>
						</Link>
					)}

					{!authCtx.isLoggedIn && (
						<Link to='/login' className='nav__log-btn'>
							Log In
						</Link>
					)}
					{authCtx.isLoggedIn && (
						<Button classes='nav__log-btn' onClick={authCtx.logout}>
							Log Out
						</Button>
					)}
				</div>
			</div>
			<div
				className={showMenu ? 'nav__links-mobile show' : 'nav__links-mobile'}
				onClick={changeShowMenuState}
			>
				<div className='nav__links-container'>
					<NavLink className='nav__link-mobile' to='/'>
						Home
					</NavLink>
					<NavLink className='nav__link-mobile' to='/search'>
						Search
					</NavLink>
					<NavLink className='nav__link-mobile' to='/favourites'>
						Favourite
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
