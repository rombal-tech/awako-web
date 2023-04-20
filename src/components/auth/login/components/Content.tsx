import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Content = () => (
	<>
		<Typography variant="h4" component="div" className="login">
			Login
		</Typography>
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
		<div className="login-button-confirm">
			<NavLink to="/dashboard">
				<button
					className="btn-login"
					type="submit"
				>
					Log in
				</button>
			</NavLink>
			<NavLink to="/registration" className="btn-question-one">
				<Typography
					variant="subtitle1"
					component="div"
					gutterBottom
				>
					Not registered yet?
				</Typography>
			</NavLink>
			<NavLink to="/" className="btn-question-two">
				<Typography
					variant="subtitle1"
					component="div"
					gutterBottom
				>
					Forgot password?
				</Typography>
			</NavLink>
		</div>
	</>
);

export default Content;
