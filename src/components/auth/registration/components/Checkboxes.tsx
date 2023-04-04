import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

const Checkboxes = () => (
	<div>
		<FormGroup>
			<FormControlLabel
				control={<Checkbox defaultChecked sx={{ color: '#292929', '&.Mui-checked': { color: '#292929' } }} />}
				label="I agree with the policy of personal data processing"
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked sx={{ color: '#292929', '&.Mui-checked': { color: '#292929' } }} />}
				label="Subscribe to DB Modeling newsletter"
			/>
		</FormGroup>
	</div>
);

export default Checkboxes;
