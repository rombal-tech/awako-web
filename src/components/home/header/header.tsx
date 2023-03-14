import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
	<nav>
		<div>
			<Button variant="outlined" color="secondary">
				<div>
					<NavLink to="/login">LOGIN</NavLink>
				</div>
			</Button>
			<Button variant="outlined" color="secondary">
				<div>
					<NavLink to="/registration">SIGN UP</NavLink>
				</div>
			</Button>
		</div>
	</nav>
);

export default Header;
