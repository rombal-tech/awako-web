import React, { useState } from 'react';

interface ICheckBoxProps {
	content: string,
	onChange: () => void,
	className?: string,
}

const CheckBox = (props: ICheckBoxProps) => {
	const { content, className } = props;
	const [checked, setChecked] = useState(false);

	return (
		<div className="register-frame__checkbox-content-box">
			<input
				className={`ui__checkbox ${className}`}
				type="checkbox"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			{content}
		</div>
	);
};

export default CheckBox;
