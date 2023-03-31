import React from 'react';
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { ICodePage } from '../ICodePage';
import codeValidation from './codeValidation';

const onSubmit: SubmitHandler<ICodePage> = (data) => console.log(data);
const Controllers = () => {
	const { handleSubmit, control } = useForm<ICodePage>();
	const { errors } = useFormState({
		control,
	});
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				rules={codeValidation} // обязательно для заполнения
				name="code"
				render={({ field }) => (
					<TextField
						label="Код подтверждения"
						size="small"
						margin="normal"
						className="code-page-input"
						fullWidth
						onChange={(e) => field.onChange(e)}
						value={field.value}
						error={!!errors.code?.message}
						helperText={errors.code?.message}
					/>
				)}
			/>
		</form>
	);
};

export default Controllers;
