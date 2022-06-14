import classes from './Poster.module.scss';

const Poster: React.FC<{ image: string | undefined}> = ({ image }) => {
	return (
		<div className={classes.poster}>
			<img
				className={classes.poster__img}
				src={image}
				alt='Movie poster'
			/>
		</div>
	);
};

export default Poster;
