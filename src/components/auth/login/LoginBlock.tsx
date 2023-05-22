import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import EmailInput from '../../ui/inputs/EmailInput';
import PasswordInput from '../../ui/inputs/PasswordInput';
import SecondaryButton from '../../ui/SecondaryButton';
import ContentPrimaryFrame from '../../ui/ContentPrimaryFrame';
import PrimaryButton from '../../ui/PrimaryButton';

const onForgotPasswordClick = (navigateToPasswordRecovery: NavigateFunction) => {
	navigateToPasswordRecovery('/recovery');
};

const onLoginClick = (navigateToSchemas: NavigateFunction) => {
	navigateToSchemas('/dashboard');
};

const onRegistrationClick = (navigateToRegistration: NavigateFunction) => {
	navigateToRegistration('/registration');
};

const LoginBlock = () => {
	const navigate = useNavigate();
	return (
		<ContentPrimaryFrame className="login-page__login-block">
			<h1>Log in</h1>
			<EmailInput className="login-frame__input login-frame__input_email" placeholder="Email" />
			<PasswordInput className="login-frame__input login-frame__input_password" placeholder="Password" />
			<div className="login-frame__forgot-password-box">
				<SecondaryButton
					content="Forgot password ?"
					onClick={() => onForgotPasswordClick(navigate)}
				/>
			</div>
			<PrimaryButton
				className="login-frame__login-button"
				content="Login"
				onClick={() => onLoginClick(navigate)}
			/>
			<div className="login-frame__registration-box">
				<p>Not registered yet?</p>
				<SecondaryButton
					content="Registration"
					onClick={() => onRegistrationClick(navigate)}
				/>
			</div>
		</ContentPrimaryFrame>
	);
};

export default LoginBlock;
