import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import API from '../../../../api/API';

const Content = () => {
	const inputEmail: React.RefObject<any> = React.createRef();
	const inputPassword: React.RefObject<any> = React.createRef();

	const authorization = () => {
		const email = inputEmail.current.value;
		const password = inputPassword.current.value;
		API.auth.authorization({ email, password }).then((body) => {
			console.log(body);
		}).catch(() => {
			console.log('error');
		});
		console.log(email, password);
	};

	return (
		<>
			<div>
				<Typography variant="h4" component="div" className="registration">
					Registration
				</Typography>
			</div>
			<input
				ref={inputEmail}
				className="reg-inputs"
				type="text"
				placeholder="Email"
			/>
			<input
				ref={inputPassword}
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
						onClick={authorization}
					>
						Send Code
					</button>
				</NavLink>
			</div>
		</>
	);
};

export default Content;
