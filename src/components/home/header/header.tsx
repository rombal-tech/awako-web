import React from 'react';
import { Button, AppBar, Toolbar, Stack } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
	<AppBar position="fixed" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} className="appBar">
		<Toolbar variant="dense">
			<Stack spacing={2} direction="row" className="login-button">
				<Button
					variant="text"
					size="small"
				>
					<NavLink to="/registration">НАЧНИ МОДЕЛИРОВАНИЕ СЕЙЧАС</NavLink>
				</Button>
				<Button variant="text" color="inherit" size="small">
					<NavLink to="/login">Войти</NavLink>
				</Button>
				<Button variant="text" color="inherit" size="small">
					<NavLink to="/">О компании</NavLink>
				</Button>
			</Stack>
		</Toolbar>
	</AppBar>
);

export default Header;
