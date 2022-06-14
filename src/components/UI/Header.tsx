import classes from './Header.module.scss';

const Header: React.FC<{ children: JSX.Element }> = ({ children }) => {
	return <header className={classes.header}>{children}</header>;
};

export default Header;
