import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Content = () => (
	<>
		<text className="login">
			<h4>Log in</h4>
		</text>
		<input
			className="login-inputs"
			type="email"
			placeholder="Email"
		/>
		<input
			className="login-inputs"
			type="password"
			placeholder="Password"
		/>
		<NavLink to="/" className="button-forgot-password">
			<Typography>
				Forgot password?
			</Typography>
		</NavLink>
		<div className="login-button-confirm">
			<NavLink to="/dashboard">
				<button
					className="button-login"
					type="submit"
				>
					Login
				</button>
			</NavLink>
			<Typography className="not-registered-yet">
				Not registered yet?
			</Typography>
			<NavLink to="/registration" className="link-to-registration">
				<Typography
					component="div"
					gutterBottom
				>
					Registration
				</Typography>
			</NavLink>
		</div>
	</>
);

export default Content;
