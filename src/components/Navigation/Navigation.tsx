import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import searchIcon from '../../assets/images/glass-solid.svg';
import Hamburger from './Hamburger';

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
		<nav className='nav'>
			<div className='nav__wrapper'>
				<Hamburger onShowMenu={showMenuHandler} hideMenu={hideMenu} />
				<div className='nav__box'>
					<Link to='/search' className='nav__link'>
						<img
							src={searchIcon}
							alt='search icon'
							className='nav__search-icon'
						/>
					</Link>

					<Link to='/login' className='nav__log-btn'>
						Log In
					</Link>
				</div>
			</div>
			{/* {showMenu && ( */}
			<div
				className={showMenu ? 'nav__links-mobile show' : 'nav__links-mobile'}
				onClick={changeShowMenuState}
			>
				<div className='nav__links-container'>
					<Link className='nav__link-mobile' to='/'>
						Home
					</Link>
					<Link className='nav__link-mobile' to='/search'>
						Search
					</Link>
					<Link className='nav__link-mobile' to='/favourite'>
						Favourite
					</Link>
					<Link className='nav__link-mobile' to='/account'>
						Account
					</Link>
				</div>
			</div>
			{/* )} */}
		</nav>
	);
};

export default Navigation;
