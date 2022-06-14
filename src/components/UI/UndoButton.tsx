import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../../assets/images/arrow-left-solid.svg';
import classes from './UndoButton.module.scss';

const UndoButton: React.FC = () => {
	const navigate = useNavigate();

	const undoHandler = () => {
		navigate(-1);
	};

	return (
		<div className={classes.undoBtn}>
			<img
				className={classes.undoBtn__img}
				src={ArrowLeft}
				alt='Undo button'
				onClick={undoHandler}
			/>
		</div>
	);
};

export default UndoButton;
