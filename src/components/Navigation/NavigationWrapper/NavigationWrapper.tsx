import Hamburger from '../Hamburger/Hamburger';
import classes from './NavigationWrapper.module.scss';
import LinkSearchInput from '../LinkSearchInput';
import NavigationBox from '../NavigationBox/NavigationBox';

const NavigationWrapper: React.FC<{
	showMenuHandler: (state: boolean) => void;
	hideMenu: boolean;
}> = ({ showMenuHandler, hideMenu }) => {
	return (
		<div className={classes.navigationWrapper}>
			<Hamburger onShowMenu={showMenuHandler} hideMenu={hideMenu} />
			<LinkSearchInput />
			<NavigationBox />
		</div>
	);
};

export default NavigationWrapper;
