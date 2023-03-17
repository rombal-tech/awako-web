import React from 'react';
import { Typography } from '@material-ui/core';
import Header from '../../home/header/header';
import Controllers from './elemetsRegisterPage/Controllers';
import Buttons from './elemetsRegisterPage/Buttons';
import Checkboxes from './elemetsRegisterPage/Checkboxes';
import './RegisterPage.scss';

const RegisterPage = () => (
	<>
		<div>
			<Header />
		</div>
		<div className="register-page">
			<Typography variant="h4" component="div">
				Регистрация
			</Typography>
			<Typography variant="subtitle1" component="div" gutterBottom className="register-page-subtitle">
				Зарегистрируйся и создай свою модель бд
			</Typography>
			<div className="register-page-form">
				<Controllers />
			</div>
			<div className="checkBoxes">
				<Checkboxes />
			</div>
			<div className="register-button-confirm">
				<Buttons />
			</div>
		</div>
	</>
);

export default RegisterPage;
