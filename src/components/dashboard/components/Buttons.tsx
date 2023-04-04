import React from 'react';
import Icon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';

const Buttons = () => {
	const style = {
		marginRight: 20,
	};
	return (
		<div style={{ marginBottom: 40 }}>
			<Button
				size="large"
				variant="contained"
				/* startIcon={<Icon />} */
				color="inherit"
				style={style}
				disabled={false}
			>
				New Scheme
			</Button>
			<Button
				size="large"
				variant="contained"
				/* startIcon={<Icon />} */
				color="inherit"
				style={style}
				disabled={false}
			>
				Import
			</Button>
		</div>
	);
};

export default Buttons;
