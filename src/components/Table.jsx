import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const Table = React.memo((props) => {
	return (
		<div style={{ height: 400, width: '90%', margin: '10px auto' }}>
			<DataGrid {...props} columnBuffer={2} rowHeight={26} />
		</div>
	);
});

export default Table;
