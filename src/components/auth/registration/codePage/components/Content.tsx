import React, { ChangeEvent } from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Content = () => {
	const onBeforeInput = (ev: ChangeEvent<HTMLInputElement>) => {
		const inputEvent = ev.nativeEvent as InputEvent;
		console.log(inputEvent);
		if (inputEvent.type === 'textInput' && inputEvent.data !== null) {
			if (!isNumber(inputEvent.data)) {
				inputEvent.preventDefault();
			}
		}
		if (inputEvent.target !== null && (inputEvent.target as HTMLInputElement).value.length === 6) {
			inputEvent.preventDefault();
		}
	};

	function isNumber(char: string): boolean {
		const code = char.codePointAt(0);
		if (code === undefined) {
			return false;
		}
		return code > 47 && code < 58;
	}
	
	return (
		<div className="confirmation-form">
			<Typography variant="h4" component="div" className="confirmation">
				Confirmation
			</Typography>
			<Typography component="div" className="write-your-code">
				Code from Email
			</Typography>
			<input
				className="code-input"
				onBeforeInput={onBeforeInput}
				id="input"
				name="code"
				type="text"
				placeholder="Code"
			/>
			<div className="send-code">
				<NavLink to="/">
					<button
						className="btn-confirm"
						type="submit"
					>
						Confirm
					</button>
				</NavLink>
			</div>
			<div className="question">
				Did the code not come?
			</div>
			<NavLink to="/account/confirm/000000" className="btn-send-code">
				<Typography
					variant="subtitle1"
					component="div"
					gutterBottom
				>
					Send code again
				</Typography>
			</NavLink>
		</div>
	);
};

export default Content;
