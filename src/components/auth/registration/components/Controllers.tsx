import React from 'react';
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { TextField, Typography } from '@material-ui/core';
import { emailValidation, passwordValidation } from './Validation';
import { IRegisterPage } from '../IRegisterPage';
 
const onSubmit: SubmitHandler<IRegisterPage> = (data) => console.log(data);
const Controllers = () => {
	const { handleSubmit, control } = useForm<IRegisterPage>();
	const { errors } = useFormState({
		control,
	});
	return (
		<>
			<div>
				<Typography variant="h4" component="div">
					Registration
				</Typography>
			</div>
			<div className="instruction">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Typography variant="subtitle1" component="div" gutterBottom>
						Register and create your database model
					</Typography>
					<Controller
						control={control}
						rules={emailValidation} // обязательно для заполнения
						name="email"
						render={({ field }) => (
							<TextField
								label="Email"
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
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						control={control}
						rules={passwordValidation}
						name="password"
						render={({ field }) => (
							<TextField
								label="Password"
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
				<Typography variant="subtitle1" component="div">
					<h5>Optional field</h5>
				</Typography>
			</div>
		</>
	);
};

export default Controllers;
