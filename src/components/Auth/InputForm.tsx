const InputForm: React.FC<{
	type: string;
	id: string;
	ref: React.RefObject<HTMLInputElement>;
}> = ({ type, id, ref }) => {
	return (
		<input
			type={type}
			id={id}
			className='auth__input'
			ref={ref}
			required
		/>
	);
};

export default InputForm;
