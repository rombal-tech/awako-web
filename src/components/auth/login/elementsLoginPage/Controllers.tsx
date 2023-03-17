import React from 'react';
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { emailValidation, passwordValidation } from '../../Validation';
import ILoginPage from '../ILoginPage';

const onSubmit: SubmitHandler<ILoginPage> = (data) => console.log(data);

const Controllers = () => {
	const { handleSubmit, control } = useForm<ILoginPage>();
	const { errors } = useFormState({
		control,
	});
	return (
		<form className="login-page-form" onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				rules={emailValidation} // обязательно для заполнения
				name="email"
				render={({ field }) => (
					<TextField
						label="Почта"
						size="small"
						margin="normal"
						className="login-page-input"
						fullWidth
						onChange={(e) => field.onChange(e)}
						value={field.value}
						error={!!errors.email?.message}
						helperText={errors.email?.message}
					/>
				)}
			/>
			<Controller
				control={control}
				rules={passwordValidation}
				name="password"
				render={({ field }) => (
					<TextField
						label="Пароль"
						size="small"
						margin="normal"
						className="login-page-input"
						fullWidth
						onChange={(e) => field.onChange(e)}
						value={field.value}
						error={!!errors.password?.message}
						helperText={errors.password?.message}
					/>
				)}
			/>
		</form>
	);
};

export default Controllers;
