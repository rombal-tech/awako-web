import React from 'react';
import LoginPage from './login/LoginPage';
import RegisterPage from './registration/RegisterPage';
import './AuthPage.module.css';

const AuthPage: React.FC = () => (
	<div>
		<LoginPage />
		<RegisterPage />
	</div>
);

export default AuthPage;
