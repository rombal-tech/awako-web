import React from 'react';
import { Typography } from '@material-ui/core';
import Header from '../../../home/header/header';
import Buttons from './elementsCodePage/Buttons';
import Controllers from './elementsCodePage/Controllers';
import './CodePage.scss';

const CodePage = () => (
	<>
		<div>
			<Header />
		</div>
		<div className="code-page">
			<Typography variant="h4" component="div">
				Подтвердите регистрацию
			</Typography>
			<Typography variant="subtitle1" component="div" gutterBottom className="code-page-subtitle">
				Введите код из полученного письма
			</Typography>
			<div className="code-page-form">
				<Controllers />
			</div>
			<div className="code-button-confirm">
				<Buttons />
			</div>
		</div>
	</>
);

export default CodePage;
