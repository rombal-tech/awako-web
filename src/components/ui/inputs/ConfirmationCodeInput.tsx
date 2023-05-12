import React from 'react';
import Input from './Input';
import InputType from './InputType';

interface IConfirmationCodeInputProps {
	className?: string,
	placeholder?: string,
}

const PasswordInput = (props: IConfirmationCodeInputProps) => {
	const { className, placeholder } = props;

	return (
		<Input
			validationFunctions={[]}
			max={6}
			className={className}
			placeholder={placeholder}
			type={InputType.Number}
		/>
	);
};

export default PasswordInput;
