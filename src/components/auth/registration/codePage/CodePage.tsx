import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Header from '../../../home/header/header';
import Buttons from './components/Buttons';
import Controllers from './components/Controllers';
import './CodePage.scss';

const CodePage = () => (
	<>
		<div>
			<Header />
		</div>
		<div className="code-page">
			<Box
				className="form-block"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				maxWidth={640}
				margin="auto"
				padding={5}
				borderRadius={5}
				boxShadow="5px 5px 10px #ccc"
			>
				<Typography variant="h4" component="div">
					Registration confirmation
				</Typography>
				<Typography variant="subtitle1" component="div" gutterBottom className="code-page-subtitle">
					Enter the code from the letter you received
				</Typography>
				<div className="code-page-form">
					<Controllers />
				</div>
				<div className="code-button-confirm">
					<Buttons />
				</div>
			</Box>
		</div>
	</>
);

export default CodePage;
