import React from 'react';
import ContentPrimaryFrame from '../../ui/ContentPrimaryFrame';
import PasswordInput from '../../ui/inputs/PasswordInput';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';

const onChangePasswordClick = () => {
	console.log('Change password click');
};

const onRememberPasswordClick = () => {
	console.log('Remember password click');
};

const ChangePasswordBlock = () => (
	<ContentPrimaryFrame className="change-password-page__change-password-block">
		<h1>Change password</h1>
		<div className="change-password-frame__write-new-password-box">
			<p>Write new password</p>
		</div>
		<PasswordInput
			className="change-password-frame__input  change-password-frame__input_password"
			placeholder="Password"
		/>
		<PasswordInput
			className="change-password-frame__input change-password-frame__input_password"
			placeholder="Repeat password"
		/>
		<PrimaryButton
			className="change-password-frame__change-password-button"
			content="Change"
			onClick={onChangePasswordClick}
		/>
		<div className="change-password-frame__change-password-box">
			<SecondaryButton content="I remember the password" onClick={onRememberPasswordClick} />
		</div>
	</ContentPrimaryFrame>
);

export default ChangePasswordBlock;
