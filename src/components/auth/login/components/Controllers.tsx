import React from 'react';
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { TextField, Typography } from '@material-ui/core';
import { ILoginPage } from '../ILoginPage';
import { passwordValidation, emailValidation } from './loginValidation';

const onSubmit: SubmitHandler<ILoginPage> = (data) => console.log(data);
const Controllers = () => {
	const { handleSubmit, control } = useForm<ILoginPage>();
	const { errors } = useFormState({
		control,
	});
	return (
		<>
			<Typography variant="h4" component="div">
				Войдите
			</Typography>
			<Typography variant="subtitle1" component="div" gutterBottom className="login-page-subtitle">
				Необходима авторизация
			</Typography>
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
							className="email-page-input"
							fullWidth
							onChange={(e) => field.onChange(e)}
							value={field.value}
							error={!!errors.email?.message}
							helperText={errors.email?.message}
						/>
					)}
				/>
			</form>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					rules={passwordValidation}
					name="password"
					render={({ field }) => (
						<TextField
							label="Пароль"
							size="small"
							margin="normal"
							className="password-page-input"
							fullWidth
							onChange={(e) => field.onChange(e)}
							value={field.value}
							error={!!errors.password?.message}
							helperText={errors.password?.message}
						/>
					)}
				/>
			</form>
		</>
	);
};

export default Controllers;
