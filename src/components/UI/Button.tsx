import React from 'react';
import style from './Button.module.scss';

const Button: React.FC<{
	children: string;
	onClick: (event: React.FormEvent) => void;
	classes: boolean | undefined;
}> = ({ children, onClick, classes }) => {
	return (
		<button
			className={`${style.button} ${classes ? style.active : ''}`}
			onClick={onClick}
			type='button'
		>
			{children}
		</button>
	);
};

export default Button;
