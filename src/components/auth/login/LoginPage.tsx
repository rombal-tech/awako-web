import React from 'react';
import { Box } from '@material-ui/core';
import Content from './components/Content';
import './components/Validation';
import './LoginPage.scss';

const LoginPage = () => (
	<div className="login-page">
		<Box className="box-login-page">
			<div className="login-page-form">
				<Content />
			</div>
		</Box>
	</div>
);

export default LoginPage;
