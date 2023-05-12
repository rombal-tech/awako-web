import React from 'react';
import './Router.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../home/HomePage';
import LoginPage from '../auth/login/LoginPage';
import RegisterPage from '../auth/registration/RegisterPage';
import DashboardPage from '../dashboard/DashboardPage';
import ConfirmationPage from '../auth/registration-confirmation/ConfirmationPage';
import SchemeManipulator from '../../manipulator/SchemeManipulator';
import PasswordRecoveryPage from '../auth/password-recovery/PasswordRecoveryPage';
import ChangePasswordPage from '../auth/change-password/ChangePasswordPage';

const Router = () => (
	<div className="router">
		<Routes>
			<Route element={<HomePage />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			<Route path="/dashboard" element={<DashboardPage />} />
			<Route path="/account/confirm/000000" element={<ConfirmationPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/change-password" element={<ChangePasswordPage />} />
			<Route path="/recovery" element={<PasswordRecoveryPage />} />
			<Route path="/registration" element={<RegisterPage />} />
			<Route path="/manipulator" element={<SchemeManipulator />} />
		</Routes>
	</div>
);
export default Router;
