import React from 'react';
import classes from './SearchTextInput.module.scss';

const SearchTextInput: React.FC<{
	onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}> = ({ onChangeInput, placeholder }) => {
	return (
		<input
			className={classes.input}
			type='text'
			onInput={onChangeInput}
			placeholder={placeholder}
			autoFocus
		/>
	);
};

export default SearchTextInput;
