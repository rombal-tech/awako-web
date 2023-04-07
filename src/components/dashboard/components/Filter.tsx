import React from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';

const Filter = () => (
	<div className="filter-inside">
		<PopupState variant="popover" popupId="demo-popup-menu">
			{(popupState) => (
				<>
					<Button
						size="large"
						variant="outlined"
						color="inherit"
						className="filter-button"
						{...bindTrigger(popupState)}
						startIcon={<KeyboardArrowDownIcon />}
					>
						SORT BY
					</Button>
					<Menu {...bindMenu(popupState)}>
						<MenuItem onClick={popupState.close}>Alphabetically</MenuItem>
						<MenuItem onClick={popupState.close}>Last created</MenuItem>
						<MenuItem onClick={popupState.close}>Last modified</MenuItem>
					</Menu>
				</>
			)}
		</PopupState>
	</div>
);

export default Filter;
