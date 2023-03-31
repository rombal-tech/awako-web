import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../../home/header/header';
import Controllers from './components/Controllers';
import Buttons from './components/Buttons';
import './components/loginValidation';
import './LoginPage.scss';

const LoginPage = () => (
	<div className="background-photo">
		<div>
			<Header />
		</div>
		<div className="login-page">
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				maxWidth={640}
				margin="auto"
				padding={5}
				borderRadius={5}
				boxShadow="5px 5px 10px #ccc"

			>
				<div className="login-page-form">
					<Controllers />
				</div>
				<div className="login-button-confirm">
					<Buttons />
				</div>
			</Box>
		</div>
	</div>
);

export default LoginPage;
