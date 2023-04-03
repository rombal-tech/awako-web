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
				size="small"
				variant="outlined"
				/* startIcon={<Icon />} */
				color="inherit"
				style={style}
				disabled={false}
			>
				Создать схему
			</Button>
			<Button
				size="small"
				variant="outlined"
				/* startIcon={<Icon />} */
				color="inherit"
				style={style}
				disabled={false}
			>
				Импортировать
			</Button>
		</div>
	);
};

export default Buttons;
