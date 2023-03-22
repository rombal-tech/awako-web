const REGISTER_REQUIRED_FIELD = 'Обязательно для заполнения';
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
			return 'Почта не может содержать русские буквы';
		}
		if (!value.match(EMAIL_REGEXP)) {
			return 'Неверная валидация';
		}
		return true;
	},
};

export const passwordValidation = {
	required: false,
	validate: (value: string) => {
		if (value.length < 6) {
			return 'Пароль должен быть не менее 6 символов';
		}
		if (value.length >= 21) {
			return 'Пароль может содержать максимум 20 символов';
		}
		return true;
	},
};
