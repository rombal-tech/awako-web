import React from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';

const Filter = () => (
	<PopupState variant="popover" popupId="demo-popup-menu">
		{(popupState) => (
			<>
				<button
					type="submit"
					className="buttons"
					{...bindTrigger(popupState)}
				>
					SORT BY
				</button>
				<Menu {...bindMenu(popupState)}>
					<MenuItem onClick={popupState.close}>Alphabetically</MenuItem>
					<MenuItem onClick={popupState.close}>Last created</MenuItem>
					<MenuItem onClick={popupState.close}>Last modified</MenuItem>
				</Menu>
			</>
		)}
	</PopupState>
);

export default Filter;
