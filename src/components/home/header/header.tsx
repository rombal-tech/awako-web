import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './header.module.css';

const Header = () => (
	<nav>
		<div>
			<Button variant="outlined" color="secondary">
				<div className={s.item}>
					<NavLink to="/login">LOGIN</NavLink>
				</div>
			</Button>
			<Button variant="outlined" color="secondary">
				<div className={s.item}>
					<NavLink to="/registration">SIGN UP</NavLink>
				</div>
			</Button>
		</div>
	</nav>
);

export default Header;
