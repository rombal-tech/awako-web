import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Buttons = () => (
	<div className="send-code">
		<NavLink to="/account/confirm/000000">
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
				Send Code
			</Button>
		</NavLink>
	</div>
);

export default Buttons;
