import React, { FormEvent } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ContentPrimaryFrame from '../../ui/ContentPrimaryFrame';
import EmailInput from '../../ui/inputs/EmailInput';
import PasswordInput from '../../ui/inputs/PasswordInput';
import CheckBox from '../../ui/CheckBox';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import { RootState } from '../../../redux/store';
import { updateRegistrationEmail } from '../../../redux/reducers/registrationValues';

const onNextStepClick = (onNextStepClick: NavigateFunction) => {
	onNextStepClick('/account/confirm');
};

const onAuthenticationClick = (onAuthenticationClick: NavigateFunction) => {
	onAuthenticationClick('/login');
};

const onCheckBoxClick = () => {
	console.log('CheckBox click');
};

const RegisterBlock = () => {
	const navigate = useNavigate();
	const emailValue = useSelector((state: RootState) => state.registration.email);
	const isEmailValid = useSelector((state: RootState) => state.registration.isEmailValid);
	const dispatch = useDispatch();

	return (
		<ContentPrimaryFrame className="register-page__register-block">
			<h1>Registration</h1>
			<input
				style={{
					borderColor: isEmailValid ? 'green' : 'red',
					outline: 'none',
				}}
				type="text"
				value={emailValue}
				onInput={(ev: FormEvent<HTMLInputElement>) => dispatch(updateRegistrationEmail(
					(ev.target as HTMLInputElement).value,
				))}
			/>

			<EmailInput className="register-frame__input  register-frame__input_email" placeholder="Email" />
			<div className="register-frame__optional-field-box">
				<p>Optional field</p>
			</div>
			<PasswordInput className="register-frame__input register-frame__input_password" placeholder="Password" />
			<div className="register-frame__policy-of-personal-data-processing-box">
				<CheckBox content="I agree with the policy of personal data processing" onChange={onCheckBoxClick} />
			</div>
			<PrimaryButton
				className="register-frame__register-button"
				content="Next step"
				onClick={() => onNextStepClick(navigate)}
			/>
			<div className="register-frame__authentication-box">
				<p>Already registered?</p>
				<SecondaryButton
					content="Authentication"
					onClick={() => onAuthenticationClick(navigate)}
				/>
			</div>
		</ContentPrimaryFrame>
	);
};

export default RegisterBlock;
