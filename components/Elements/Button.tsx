import React, { FC } from 'react';

const variants = {
	primary: 'primary',
	inverse: 'inverse',
	danger: 'danger',
};

const sizes = {
	sm: 'sm',
	md: 'md',
	lg: 'lg',
};

interface IProps {
	size: keyof typeof sizes;
	variant: keyof typeof variants;
	isLoading?: boolean;
	[x: string]: any;
}
const Button: FC<IProps> = ({ children, size, variant, isLoading, ...props }) => {
	return (
		<div
			{...props}
			className={`
        button
        ${size}
        button--${variant}
        ${isLoading ? 'disabled' : ''}
        `}
		>
			{isLoading ? <div className="loader"></div> : null}
			<div className="button-content"> {children}</div>
		</div>
	);
};

export default Button;
