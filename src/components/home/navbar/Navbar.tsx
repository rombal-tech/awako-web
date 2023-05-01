import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuData } from './MenuData';
import './Navbar.css';

const Navbar = () => (
	<nav className="navbar-items">
		<h1 className="logo">
			Alvile
			<i className="fab fa-react" />
		</h1>
		<ul className="nav-menu">
			{MenuData.map((item: any) => (
				<li className={item.index}>
					<NavLink to={item.url} className={item.cName}>
						<i className={item.icon}>
							{item.title}
						</i>
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
);

export default Navbar;
