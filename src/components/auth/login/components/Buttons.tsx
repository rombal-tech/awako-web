import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Buttons = () => (
	<div className="login-button-confirm">
		<NavLink to="/dashboard">
			<Button
				variant="contained"
				type="submit"
				style={{ backgroundColor: '#505050' }}
				fullWidth
				disableElevation
				sx={{
					marginTop: 2,
				}}
			>
				Войти
			</Button>
		</NavLink>
		<div className="reg-question" style={{ marginTop: 15 }}>
			<NavLink to="/registration">
				<Typography variant="subtitle1" component="div" gutterBottom>
					Еще не зарегистрировались ?
				</Typography>
				<NavLink to="/">
					<Typography variant="subtitle1" component="div" gutterBottom>
						Забыли пароль ?
					</Typography>
				</NavLink>
			</NavLink>
		</div>
	</div>
);

export default Buttons;
