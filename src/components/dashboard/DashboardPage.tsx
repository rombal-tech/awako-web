import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Header from '../home/header/header';
import ProjectsList from './components/ProjectsList';
import Buttons from './components/Buttons';
import ListPagination from './components/Pagination';
import SchematicsCount from './components/SchematicsCount';
import Filter from './components/Filter';
import './DashboardPage.scss';

export interface DBSchema {
	name: string
	description: string
	checked: boolean
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
				{ name: 'Scheme 1', description: 'Scheme description 1', checked: false, id: 0 },
				{ name: 'Scheme 2', description: 'Scheme description 2', checked: false, id: 1 },
				{ name: 'Scheme 3', description: 'Scheme description 3', checked: false, id: 2 },
				{ name: 'Scheme 4', description: 'Scheme description 4', checked: false, id: 3 },
				{ name: 'Scheme 5', description: 'Scheme description 5', checked: false, id: 4 },
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
					<div className="card-body">
						<div className="card-header">
							<h5 className="card-title">Possibilities</h5>
						</div>
						<div className="container">
							<Buttons />
						</div>
						<div className="card-header">
							<h5 className="card-title"> Schematics</h5>
							<Filter />
						</div>
					</div>
					<Box
						className="box"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						margin="auto"
						padding={1}
						borderRadius={3}
						boxShadow="5px 5px 10px #ccc"
						width="100%"
					>
						<div className="card-body">
							<div className="media-list">
								<ProjectsList
									items={DBSchemas}
								/>
								<SchematicsCount />
								<ListPagination />
							</div>
						</div>
					</Box>
				</div>
			</>
		);
	}
}
