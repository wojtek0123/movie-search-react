import { NavLink } from 'react-router-dom';
import classes from './HamburgerMenu.module.scss';

const HamburgerMenu: React.FC<{ showMenu: boolean; onShow: () => void }> = ({
	showMenu,
	onShow,
}) => {
	return (
		<div
			className={
				showMenu
					? `${classes.hamburgerMenu__linksMobile} ${classes.show}`
					: classes.hamburgerMenu__linksMobile
			}
			onClick={onShow}
		>
			<div className={classes.hamburgerMenu__links}>
				<NavLink className={classes.hamburgerMenu__linkMobile} to='/'>
					Home
				</NavLink>
				<NavLink className={classes.hamburgerMenu__linkMobile} to='/search'>
					Search
				</NavLink>
				<NavLink className={classes.hamburgerMenu__linkMobile} to='/favourites'>
					Favourite
				</NavLink>
			</div>
		</div>
	);
};

export default HamburgerMenu;
