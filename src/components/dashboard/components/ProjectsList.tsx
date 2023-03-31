import React from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@material-ui/core';
import { DBSchema } from '../DashboardPage';

interface ProjectListProps {
	items: DBSchema[]
}
const ProjectsList = (props: ProjectListProps) => {
	const { items } = props;
	return (
		<List>
			{items.map((item, key) => (
				<div key={item.id}>
					<ListItem>
						<ListItemButton>
							<ListItemText
								primary={item.name}
								secondary={item.description}
							/>
						</ListItemButton>
					</ListItem>
					<Divider />
				</div>
			))}
		</List>
	);
};

export default ProjectsList;
