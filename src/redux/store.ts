import { configureStore } from '@reduxjs/toolkit';
import registrationValues from './reducers/registrationValues';

export const store = configureStore({
	reducer: {
		registration: registrationValues,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
