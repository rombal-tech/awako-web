import React from 'react';
import { Box } from '@material-ui/core';
import Content from './components/Content';
import './RegisterPage.scss';

const RegisterPage = () => (
	<div className="register-page">
		<Box className="box-reg-page">
			<div className="reg-page-form">
				<Content />
			</div>
		</Box>
	</div>
);

export default RegisterPage;
