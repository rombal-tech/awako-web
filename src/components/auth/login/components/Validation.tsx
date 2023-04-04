const LOGIN_REQUIRED_FIELD = 'Required field';
const RIGHT_PASSWORD = 'Right Password';
const EMAIL_REGEXP = new RegExp(
	[
		'^(([^<>()[\\].,;:\\s@"]+(.[^<>()[\\].,;:\\s@"]+)*)|(".+"))@',
		'(([^<>()[\\].,;:\\s@"]+\\.)+[^<>()[\\].,;:\\s@"]{2,})$',
	].join(''),
	'iu',
);
export const emailValidation = {
	required: LOGIN_REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.match(/[А-я]/)) {
			return 'Mail cannot contain Cyrillic letters';
		}
		if (!value.match(EMAIL_REGEXP)) {
			return 'Invalid validation';
		}
		return true;
	},
};

export const passwordValidation = {
	required: LOGIN_REQUIRED_FIELD,
	validate: (value: string) => {
		if (!RIGHT_PASSWORD) {
			return 'Invalid email or password';
		}
		/*  if (value.length < 6) {
			return 'Invalid email or password';
		}
		if (value.length >= 21) {
			return 'Invalid email or password';
		}  */
		return true;
	},
};
