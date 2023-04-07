import React from 'react';
import { Button, AppBar, Toolbar, Stack } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
	<AppBar position="fixed" style={{ backgroundColor: 'rgb(0,0,0.5)' }} className="appBar">
		<Toolbar variant="dense">
			<Stack spacing={2} direction="row" className="login-button">
				<Button
					variant="text"
					size="small"
				>
					<NavLink to="/registration">Get Started Now</NavLink>
				</Button>
				<Button variant="text" color="inherit" size="small">
					<NavLink to="/login">Login</NavLink>
				</Button>
				<Button variant="text" color="inherit" size="small">
					<NavLink to="/">About Us</NavLink>
				</Button>
			</Stack>
		</Toolbar>
	</AppBar>
);

export default Header;
