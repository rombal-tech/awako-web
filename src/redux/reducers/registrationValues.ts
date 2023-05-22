import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RegistrationValuesState {
	email: string,
	isEmailValid: boolean | null,
	password: string,
}

const initialState: RegistrationValuesState = {
	email: '',
	isEmailValid: null,
	password: '',
};

const registrationValues = createSlice({
	name: 'registration values',
	initialState,
	reducers: {
		updateRegistrationEmail: (state, action: PayloadAction<string>) => {
			state.isEmailValid = action.payload.length <= 5;
			state.email = action.payload;
		},
		updateRegistrationPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
});

export const { updateRegistrationEmail, updateRegistrationPassword } = registrationValues.actions;

export default registrationValues.reducer;
