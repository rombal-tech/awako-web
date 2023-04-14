import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListPagination = () => (
	<Stack 
		spacing={2} 
		className="pagination" 
		style={{ 
			marginTop: 5,
			marginBottom: 15,
		}}
	>
		<Pagination
			count={6}
			showFirstButton
			showLastButton
			shape="rounded"
			size="large"
		/>
	</Stack>
);

export default ListPagination;
