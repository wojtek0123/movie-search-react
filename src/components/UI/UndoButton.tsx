import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../../assets/images/arrow-left-solid.svg';
import './UndoButton.scss';

const UndoButton: React.FC = () => {
	const navigate = useNavigate();

	const undoHandler = () => {
		navigate(-1);
	};

	return (
		<div className='wrapper'>
			<img
				className='undo-btn'
				src={ArrowLeft}
				alt='Undo button'
				onClick={undoHandler}
			/>
		</div>
	);
};

export default UndoButton;
