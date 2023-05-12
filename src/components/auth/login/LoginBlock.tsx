import React from 'react';
import EmailInput from '../../ui/inputs/EmailInput';
import PasswordInput from '../../ui/inputs/PasswordInput';
import SecondaryButton from '../../ui/SecondaryButton';
import ContentPrimaryFrame from '../../ui/ContentPrimaryFrame';
import PrimaryButton from '../../ui/PrimaryButton';

const onForgotPasswordClick = () => {
	console.log('forgot password click!');
};

const onLoginClick = () => {
	console.log('login click!');
};

const onRegistrationClick = () => {
	console.log('registration click!');
};

const LoginBlock = () => (
	<ContentPrimaryFrame className="login-page__login-block">
		<h1>Log in</h1>
		<EmailInput className="login-frame__input login-frame__input_email" placeholder="Email" />
		<PasswordInput className="login-frame__input login-frame__input_password" placeholder="Password" />
		<div className="login-frame__forgot-password-box">
			<SecondaryButton content="Forgot password ?" onClick={onForgotPasswordClick} />
		</div>
		<PrimaryButton className="login-frame__login-button" content="Login" onClick={onLoginClick} />
		<div className="login-frame__registration-box">
			<p>Not registered yet?</p>
			<SecondaryButton content="Registration" onClick={onRegistrationClick} />
		</div>
	</ContentPrimaryFrame>
);

export default LoginBlock;