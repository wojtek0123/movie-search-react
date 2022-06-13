const BackgroundImage: React.FC<{ image: string | undefined }> = ({
	image,
}) => {
	return (
		<img
			className='details__img'
			src={image}
			alt={`One of images from movie`}
		/>
	);
};

export default BackgroundImage;
