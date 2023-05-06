import React from 'react';

interface IPrimaryButtonProps {
	content: string,
	onClick: () => void,
	className?: string,
}

const PrimaryButton = (props: IPrimaryButtonProps) => {
	const { content, onClick, className } = props;

	return (
		<button
			type="button"
			className={`ui__primary-button ${className === undefined ? '' : className}`}
			onClick={onClick}
		>
			{ content }
		</button>
	);
};

export default PrimaryButton;
