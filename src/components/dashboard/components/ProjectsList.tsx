import React from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	TableHead,
	TableRow,
	TableCell,
	Table,
} from '@material-ui/core';
import { DBSchema } from '../DashboardPage';
import FadeMenu from './FadeMenu';

interface ProjectListProps {
	items: DBSchema[],
}
const ProjectsList = (props: ProjectListProps) => {
	const { items } = props;
	return (
		<List>
			<Table className="table-header">
				<TableHead>
					<TableRow>
						<TableCell align="center" className="name-row">
							Name
						</TableCell>
						<TableCell align="center" className="creation-date-row">
							Creation Date
						</TableCell>
						<TableCell align="center" className="last-modified-row">
							Last Modified
						</TableCell>
					</TableRow>
				</TableHead>
			</Table>
			{items.map((item, key) => (
				<div key={item.id}>
					<ListItem>
						<ListItemButton>
							<ListItemText
								primary={item.name}
								secondary={item.description}
							/>
							<ListItemText
								className="creation-date"
								secondary={item.creationDate}
							/>
							<ListItemText
								className="last-modified"
								secondary={item.lastModified}
							/>
							<FadeMenu />
						</ListItemButton>
					</ListItem>
					<Divider />
				</div>
			))}
		</List>
	);
};

export default ProjectsList;
