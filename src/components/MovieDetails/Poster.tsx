const Poster: React.FC<{ image: string | undefined}> = ({ image }) => {
	return (
		<div className='details__box details__box-center-img'>
			<img
				className='details__box-img'
				src={image}
				alt='Movie poster'
			/>
		</div>
	);
};

export default Poster;
