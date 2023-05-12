import React from 'react';
import ContentPrimaryFrame from '../../ui/ContentPrimaryFrame';
import ConfirmationCodeInput from '../../ui/inputs/ConfirmationCodeInput';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';

const onConfirmationClick = () => {
	console.log('Confirmation click');
};

const onSendCodeAgainClick = () => {
	console.log('Send code click');
};

const ConfirmationBlock = () => (
	<ContentPrimaryFrame className="confirmation-page__confirmation-block">
		<h1>Confirmation</h1>
		<div className="confirmation-frame__sending-code-to-email-box">
			<p>We emailed you the code</p>
		</div>
		<ConfirmationCodeInput
			className="confirmation-frame__input  confirmation-frame__input_code"
			placeholder="Code"
		/>
		<PrimaryButton 
			className="confirmation-frame__confirmation-button" 
			content="Confirm" 
			onClick={onConfirmationClick}
		/>
		<div className="confirmation-frame__sending-code-again-box">
			<p>Did the code not come?</p>
			<SecondaryButton content="Send code again" onClick={onSendCodeAgainClick} />
		</div>
	</ContentPrimaryFrame>
);

export default ConfirmationBlock;
