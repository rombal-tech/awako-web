import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Header from '../../home/header/header';
import Controllers from './elementsLoginPage/Controllers';
import Buttons from './elementsLoginPage/Buttons';
import '../Validation';
import './LoginPage.scss';

const LoginPage = () => (
	<>
		<div>
			<Header />
		</div>
		<div className="login-page">
			<Typography variant="h4" component="div">
				Войдите
			</Typography>
			<Typography variant="subtitle1" component="div" gutterBottom className="login-page-subtitle">
				Необходима авторизация
			</Typography>
			<div className="login-page-form">
				<Controllers />
			</div>
			<div className="login-button-confirm">
				<Buttons />
			</div>
			<div className="reg-question">
				<NavLink to="/registration">
					<Typography variant="subtitle1" component="div" gutterBottom>
						Еще не зарегистрировались ?
					</Typography>
				</NavLink>
			</div>
		</div>
	</>
);

export default LoginPage;
