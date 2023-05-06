import React, { FormEvent } from 'react';
import InputType from './InputType';

interface IInputProps {
	type: InputType,
	max: number,
	validationFunctions: ((content: string) => boolean)[],
	onInput?: (content: string) => void,
	className?: string,
	placeholder?: string,
}

const onBeforeInput = (ev: FormEvent, props: IInputProps) => {
	const { validationFunctions, onInput } = props;
	const inputElement = ev.target as HTMLInputElement;
	const content = inputElement.textContent as string;

	const isValid = validationFunctions.map(fn => fn(content)).some(validationResult => validationResult);
	if (!isValid) {
		// ev.preventDefault();
	}

	if (onInput) {
		onInput(content);
	}
};

const Input = (props: IInputProps) => {
	const { type, max, className, placeholder } = props;

	return (
		<input
			type={type}
			max={max}
			className={`ui__input ${className}`}
			placeholder={placeholder}
			onBeforeInput={(ev: FormEvent) => { onBeforeInput(ev, props); }}
		/>
	);
};

export default Input;
