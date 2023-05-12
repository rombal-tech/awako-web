import React from 'react';
import ContentPrimaryFrame from '../../ui/ContentPrimaryFrame';
import EmailInput from '../../ui/inputs/EmailInput';
import PasswordInput from '../../ui/inputs/PasswordInput';
import CheckBox from '../../ui/CheckBox';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';

const onSendCodeClick = () => {
	console.log('Send Code click');
};

const onAuthenticationClick = () => {
	console.log('Authentication click');
};

const onCheckBoxClick = () => {
	console.log('CheckBox click');
};

const RegisterBlock = () => (
	<ContentPrimaryFrame className="register-page__register-block">
		<h1>Registration</h1>
		<EmailInput className="register-frame__input  register-frame__input_email" placeholder="Email" />
		<div className="register-frame__optional-field-box">
			<p>Optional field</p>
		</div>
		<PasswordInput className="register-frame__input register-frame__input_password" placeholder="Password" />
		<div className="register-frame__policy-of-personal-data-processing-box">
			<CheckBox content="I agree with the policy of personal data processing" onChange={onCheckBoxClick} />
		</div>
		<PrimaryButton className="register-frame__register-button" content="Send Code" onClick={onSendCodeClick} />
		<div className="register-frame__authentication-box">
			<p>Already registered?</p>
			<SecondaryButton content="Authentication" onClick={onAuthenticationClick} />
		</div>
	</ContentPrimaryFrame>
);

export default RegisterBlock;
