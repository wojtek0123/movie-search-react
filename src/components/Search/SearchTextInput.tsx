import React from 'react';

const SearchTextInput: React.FC<{
	onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}> = ({ onChangeInput, placeholder }) => {
	return (
		<input
			className='search__input'
			type='text'
			onInput={onChangeInput}
			placeholder={placeholder}
			autoFocus
		/>
	);
};

export default SearchTextInput;
