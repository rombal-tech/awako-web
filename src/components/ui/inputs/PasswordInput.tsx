import React from 'react';
import Input from './Input';
import InputType from './InputType';

interface IPasswordInputProps {
	className?: string,
	placeholder?: string,
}

const PasswordInput = (props: IPasswordInputProps) => {
	const { className, placeholder } = props;

	return (
		<Input
			validationFunctions={[]}
			max={32}
			className={className}
			placeholder={placeholder}
			type={InputType.Encrypted}
		/>
	);
};

export default PasswordInput;
