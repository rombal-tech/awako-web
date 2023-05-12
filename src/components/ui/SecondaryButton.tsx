import React from 'react';

interface ISecondaryButtonProps {
	content: string,
	onClick: () => void,
	className?: string,
}

const SecondaryButton = (props: ISecondaryButtonProps) => {
	const { content, onClick, className } = props;

	return (
		<button
			className={`ui__secondary-button ${className}`}
			type="button"
			onClick={onClick}
		>
			{ content }
		</button>
	);
};

export default SecondaryButton;
