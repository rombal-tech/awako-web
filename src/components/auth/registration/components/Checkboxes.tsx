import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

const Checkboxes = () => (
	<div>
		<FormGroup>
			<FormControlLabel
				control={<Checkbox defaultChecked sx={{ color: '#292929', '&.Mui-checked': { color: '#292929' } }} />}
				label="Согласен с политикой обработки персональных данных"
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked sx={{ color: '#292929', '&.Mui-checked': { color: '#292929' } }} />}
				label="Подписка на рассылку от DB Modeling"
			/>
		</FormGroup>
	</div>
);

export default Checkboxes;
