import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './LogBtn.module.scss';
import Button from '../UI/Button';

const LogBtn: React.FC<{ styles: boolean }> = ({ styles }) => {
	const authCtx = useContext(AuthContext);
	return (
		<>
			{!authCtx.isLoggedIn && (
				<Link to='/login' className={classes.logBtn}>
					Log In
				</Link>
			)}
			{authCtx.isLoggedIn && (
				<Button classes={styles} onClick={authCtx.logout}>
					Log Out
				</Button>
			)}
		</>
	);
};

export default LogBtn;
