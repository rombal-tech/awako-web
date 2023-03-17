import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/registration/RegisterPage';
import CodePage from './components/auth/registration/codePage/CodePage';

const App = () => (
	<div className="AppWrapper">
		<Routes>
			<Route element={<HomePage />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			<Route path="/account/confirm/id000000" element={<CodePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/registration" element={<RegisterPage />} />
		</Routes>
	</div>
);
export default App;
