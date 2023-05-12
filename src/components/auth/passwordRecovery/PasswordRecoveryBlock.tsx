import React from 'react';
import ContentPrimaryFrame from '../../ui/ContentPrimaryFrame';
import EmailInput from '../../ui/inputs/EmailInput';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';

const onSendLinkClick = () => {
	console.log('SendLink click');
};

const onSendLinkAgainClick = () => {
	console.log('Send link click');
};

const PasswordRecoveryBlock = () => (
	<ContentPrimaryFrame className="password-recovery-page__password-recovery-block">
		<h1>Password recovery</h1>
		<div className="password-recovery-frame__sending-link-to-email-box">
			<p>We will send you a link to change your password</p>
		</div>
		<EmailInput
			className="password-recovery__input  password-recovery-frame__input_email"
			placeholder="Email"
		/>
		<PrimaryButton
			className="password-recovery-frame__password-recovery-button"
			content="Send Link"
			onClick={onSendLinkClick}
		/>
		<div className="password-recovery-frame__sending-link-again-box">
			<p>Did the code not come?</p>
			<SecondaryButton content="Send link again" onClick={onSendLinkAgainClick} />
		</div>
	</ContentPrimaryFrame>
);

export default PasswordRecoveryBlock;
