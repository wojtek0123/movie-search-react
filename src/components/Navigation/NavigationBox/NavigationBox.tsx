import classes from './NavigationBox.module.scss';
import SearchBtn from '../SearchBtn';
import WatchListBtn from '../WatchListBtn';
import LogBtn from '../LogBtn';

const NavigationBox: React.FC = () => {
	return (
		<div className={classes.navigationBox}>
			<SearchBtn />
			<WatchListBtn />
			<LogBtn styles={true} />
		</div>
	);
};

export default NavigationBox;