import React from 'react';
import { Box } from '@material-ui/core';
import Content from './components/Content';
import './CodePage.scss';

const CodePage = () => (
	<div className="code-page">
		<Box className="box-code-page">
			<div className="code-page-form">
				<Content />
			</div>
		</Box>
	</div>
);

export default CodePage;
