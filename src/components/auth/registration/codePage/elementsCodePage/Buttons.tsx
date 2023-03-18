import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Buttons = () => (
	<div className="send-code">
		<NavLink to="/schema/000000">
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
				Подтвердить регистрацию
			</Button>
		</NavLink>
	</div>
);

export default Buttons;
