const CODE_REQUIRED_FIELD = 'Обязательно для заполнения';

const codeValidation = {
	required: CODE_REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.length > 6 || value.length < 6) {
			return 'Код должен содержать 6 символов';
		}
		if (!value.match(/^[\sA-Za-z]*$/)) {
			return 'Код не может содержать буквы';
		}
		return true;
	},
};

export default codeValidation;
