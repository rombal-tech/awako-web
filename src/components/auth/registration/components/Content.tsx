import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Content = () => (
	<>
		<div>
			<Typography variant="h4" component="div" className="registration">
				Registration
			</Typography>
		</div>
		<input
			className="reg-inputs"
			type="text"
			placeholder="Email"
		/>
		<input
			className="reg-inputs"
			type="text"
			placeholder="Password"
		/>
		<div className="subtitle">
			Optional field
		</div>
		<div className="send-code">
			<NavLink to="/account/confirm/000000">
				<button
					className="button-send-code"
					type="submit"
				>
					Send Code
				</button>
			</NavLink>
		</div>
	</>
);

export default Content;
