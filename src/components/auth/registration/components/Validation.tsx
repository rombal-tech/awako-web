const REGISTER_REQUIRED_FIELD = 'Required field';
const EMAIL_REGEXP = new RegExp(
	[
		'^(([^<>()[\\].,;:\\s@"]+(.[^<>()[\\].,;:\\s@"]+)*)|(".+"))@',
		'(([^<>()[\\].,;:\\s@"]+\\.)+[^<>()[\\].,;:\\s@"]{2,})$',
	].join(''),
	'iu',
);
export const emailValidation = {
	required: REGISTER_REQUIRED_FIELD,
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
	required: false,
	validate: (value: string) => {
		if (value.length < 6) {
			return 'Password must be at least 6 characters long';
		}
		if (value.length >= 21) {
			return 'Number of characters exceeded';
		}
		return true;
	},
};
