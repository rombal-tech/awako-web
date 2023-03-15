import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import { emailValidation, passwordValidation } from './Validation';
import ILoginPage from './ILoginPage';
import Header from '../../home/header/header';
import './LoginPage.css';

const onSubmit: SubmitHandler<ILoginPage> = (data) => console.log(data);
const LoginPage = () => {
	const { handleSubmit, control } = useForm<ILoginPage>();
	const { errors } = useFormState({
		control,
	});
	return (
		<>
			<div>
				<Header />
			</div>
			<div className="login-page">
				<Typography variant="h4" component="div">
					Войдите
				</Typography>
				<Typography variant="subtitle1" component="div" gutterBottom className="login-page_subtitle">
					Необходима авторизация
				</Typography>
				<form className="login_page_form" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						control={control}
						rules={emailValidation} // обязательно для заполнения
						name="email"
						render={({ field }) => (
							<TextField
								label="Почта"
								size="small"
								margin="normal"
								className="login-page_input"
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
								className="login-page_input"
								fullWidth
								onChange={(e) => field.onChange(e)}
								value={field.value}
								error={!!errors.password?.message}
								helperText={errors.password?.message}
							/>
						)}
					/>
					<Button
						variant="contained"
						type="submit"
						style={{ backgroundColor: '#505050' }}
						fullWidth
						disableElevation
						sx={{
							marginTop: 2,
						}}
					>
						Войти
					</Button>
					<div className="reg-question">
						<NavLink to="/registration">
							<Typography variant="subtitle1" component="div" gutterBottom>
								Еще не зарегистрировались ?
							</Typography>
						</NavLink>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginPage;
