import React from 'react';
import './Button.scss';

const Button: React.FC<{
	children: string;
	onClick: (event: React.FormEvent) => void;
	classes: string;
}> = ({ children, onClick, classes }) => {
	return (
		<button className={classes} onClick={onClick} type='button'>
			{children}
		</button>
	);
};

export default Button;
