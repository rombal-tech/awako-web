import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/registration/RegisterPage';

const App = () => (
	<div className="AppWrapper">
		<Routes>
			<Route element={<Home />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/registration" element={<RegisterPage />} />
		</Routes>
	</div>
);
export default App;
