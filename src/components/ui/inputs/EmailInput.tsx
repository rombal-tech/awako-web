import React from 'react';
import Input from './Input';
import InputType from './InputType';

interface IEmailInputProps {
	onInput?: (content: string) => void,
	className?: string,
	placeholder?: string,
}

const EMAIL_REGEXP = new RegExp(
	[
		'^(([^<>()[\\].,;:\\s@"]+(.[^<>()[\\].,;:\\s@"]+)*)|(".+"))@',
		'(([^<>()[\\].,;:\\s@"]+\\.)+[^<>()[\\].,;:\\s@"]{2,})$',
	].join(''),
	'iu',
);

const validateEmail = (content: string): boolean => !!content.match(EMAIL_REGEXP);

const EmailInput = (props: IEmailInputProps) => {
	const { onInput, className, placeholder } = props;

	return (
		<Input
			type={InputType.Text}
			max={32}
			onInput={onInput}
			className={className}
			placeholder={placeholder}
			validationFunctions={[validateEmail]}
		/>
	);
};

export default EmailInput;
