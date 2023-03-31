import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../home/HomePage';
import LoginPage from '../auth/login/LoginPage';
import RegisterPage from '../auth/registration/RegisterPage';
import CodePage from '../auth/registration/codePage/CodePage';
import DashboardPage from '../dashboard/DashboardPage';

const Router = () => (
	<div className="router">
		<Routes>
			<Route element={<HomePage />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			<Route path="/dashboard" element={<DashboardPage />} />
			<Route path="/account/confirm/000000" element={<CodePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/registration" element={<RegisterPage />} />
		</Routes>
	</div>
);
export default Router;
