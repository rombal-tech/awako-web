import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Header from '../home/header/header';
import ProjectsList from './components/ProjectsList';
import './DashboardPage.scss';

export interface DBSchema {
	name: string
	description : string
	checked : boolean
	id: number
}

interface DashboardPageState {
	DBSchemas: DBSchema[]
}
export default class DashboardPage extends Component <any, DashboardPageState> {
	constructor(props: any) {
		super(props);
		this.state = {
			DBSchemas: [
				{ name: 'Проект 1', description: 'Описание проекта 1', checked: false, id: 0 },
				{ name: 'Проект 2', description: 'Описание проекта 2', checked: false, id: 1 },
				{ name: 'Проект 3', description: 'Описание проекта 3', checked: false, id: 2 },
				{ name: 'Проект 4', description: 'Описание проекта 4', checked: false, id: 3 },
			],
		};
	}
	
	render() {
		const { DBSchemas } = this.state;
		
		return (
			<>
				<div>
					<Header />
				</div>
				<div className="card">
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						margin="auto"
						padding={10}
						borderRadius={5}
						boxShadow="5px 5px 10px #ccc"
						width="100%"
					>
						<div className="card-header">
							<h5 className="card-title"> Ваши проекты:</h5>
						</div>
						<div className="card-body">
							<div className="media-list">
								<ProjectsList
									items={DBSchemas}
								/>
							</div>
						</div>
					</Box>

				</div>
			</>
		);
	}
}
