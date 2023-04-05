import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../../home/header/header';
import Controllers from './components/Controllers';
import Buttons from './components/Buttons';
import Checkboxes from './components/Checkboxes';
import './RegisterPage.scss';

const RegisterPage = () => (
	<div className="background-photo-reg">
		<div>
			<Header />
		</div>
		<div className="register-page">
			<Box
				className="form-block"
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
				<div className="page-controllers">
					<Controllers />
				</div>
				<div className="checkBoxes">
					<Checkboxes />
				</div>
				<div className="register-button-confirm">
					<Buttons />
				</div>
			</Box>
		</div>
	</div>
);

export default RegisterPage;
