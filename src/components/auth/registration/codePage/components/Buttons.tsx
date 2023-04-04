import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Buttons = () => (
	<div className="send-code">
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
				Confirm
			</Button>
		</NavLink>
	</div>
);

export default Buttons;
