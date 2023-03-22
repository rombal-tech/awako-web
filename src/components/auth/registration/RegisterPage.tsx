import React from 'react';
import Header from '../../home/header/header';
import Controllers from './elemetsRegisterPage/Controllers';
import Buttons from './elemetsRegisterPage/Buttons';
import Checkboxes from './elemetsRegisterPage/Checkboxes';
import './RegisterPage.scss';

const RegisterPage = () => (
	<div className="background-photo">
		<div>
			<Header />
		</div>
		<div className="register-page">
			<div className="page-controllers">
				<Controllers />
			</div>
			<div className="checkBoxes">
				<Checkboxes />
			</div>
			<div className="register-button-confirm">
				<Buttons />
			</div>
		</div>
	</div>
);

export default RegisterPage;
