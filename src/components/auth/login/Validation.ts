const REQUIRED_FIELD = 'Обязательно для заполнения';
const EMAIL_REGEXP = new RegExp(
	[
		'^(([^<>()[\\].,;:\\s@"]+(.[^<>()[\\].,;:\\s@"]+)*)|(".+"))@',
		'(([^<>()[\\].,;:\\s@"]+\\.)+[^<>()[\\].,;:\\s@"]{2,})$',
	].join(''),
	'iu',
);
export const emailValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.match(/[А-я]/)) {
			return 'Почта не может содержать русские буквы';
		}
		if (!value.match(EMAIL_REGEXP)) {
			return 'Неверная валидация';
		}
		return true;
	},
};

export const passwordValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.length < 6) {
			return 'Пароль должен быть не менее 6 символов';
		}
		return true;
	},
};
