import React from 'react';
import { Button } from '@material-ui/core';

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
	</div>
);

export default Buttons;
