const CODE_REQUIRED_FIELD = 'Required field';

const validation = {
	required: CODE_REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.length > 6 || value.length < 6) {
			return 'Code must contain 6 characters';
		}
		if (!value.match(/^[\sA-Za-z]*$/)) {
			return 'Code cannot contain letters';
		}
		return true;
	},
};

export default validation;
