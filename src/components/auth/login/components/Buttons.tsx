import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Buttons = () => (
	<div className="login-button-confirm">
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
		<div className="reg-question">
			<NavLink to="/registration">
				<Typography variant="subtitle1" component="div" gutterBottom>
					Еще не зарегистрировались ?
				</Typography>
			</NavLink>
		</div>
	</div>
);

export default Buttons;
