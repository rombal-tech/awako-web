import React from 'react';
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { emailValidation } from '../../Validation';
import { IRegisterPage } from '../IRegisterPage';
 
const onSubmit: SubmitHandler<IRegisterPage> = (data) => console.log(data);
const Controllers = () => {
	const { handleSubmit, control } = useForm<IRegisterPage>();
	const { errors } = useFormState({
		control,
	});
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				rules={emailValidation} // обязательно для заполнения
				name="email"
				render={({ field }) => (
					<TextField
						label="Почта"
						size="small"
						margin="normal"
						className="register-page-input"
						fullWidth
						onChange={(e) => field.onChange(e)}
						value={field.value}
						error={!!errors.email?.message}
						helperText={errors.email?.message}
					/>
				)}
			/>
		</form>
	);
};

export default Controllers;
