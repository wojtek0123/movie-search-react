import classes from './InputForm.module.scss';

const InputForm: React.FC<{
	type: string;
	id: string;
	reference: React.RefObject<HTMLInputElement>;
	name: string;
}> = ({ type, id, reference, name }) => {
	return (
		<div className={classes.input}>
			<label htmlFor={id} className={classes.input__label}>{name}</label>
			<input
				type={type}
				id={id}
				className={classes.input__input}
				ref={reference}
				required
			/>
		</div>
	);
};

export default InputForm;
