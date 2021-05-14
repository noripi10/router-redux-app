import React, { useState } from 'react';
import { TextField, Button, Container, makeStyles } from '@material-ui/core';
import { HeaderBar } from '../components';
import Table from '../components/Table';

const rows = [
	{ id: 0, code: '000', name: 'aaa' },
	{ id: 1, code: '001', name: 'bbb' },
	{ id: 2, code: '002', name: 'ccc' },
	{ id: 3, code: '003', name: 'ddd' },
	{ id: 4, code: '004', name: 'eee' },
];
const columns = Object.keys(rows[0]).map((key, i) => ({
	field: key,
	hide: false,
	width: i * 100,
}));

const useClasses = makeStyles((theme) => ({
	container: {
		margin: 28,
		marginBottom: 8,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		width: 250,
		fontSize: 16,
		margin: 8,
	},
	button: {
		width: 120,
		height: 36,
	},
}));

const PointCharge = () => {
	const classes = useClasses();
	const [data, setData] = useState({ rows, columns });
	const [data2, setData2] = useState({ rows, columns });
	const [selectData, setSelectData] = useState({});

	return (
		<>
			<HeaderBar title="一括登録" />

			<Container className={classes.container}>
				<TextField
					className={classes.input}
					id="standard-basic1"
					label="請求先"
				/>
				<Button
					className={classes.button}
					variant="contained"
					color="inherit"
					onClick={() => {
						const newRows = data.rows.map((row) => {
							row.id = Math.random().toString();
							return row;
						});
						// setSelectData({});
						setData((prev) => ({ ...prev, rows: newRows }));
					}}
				>
					請求先検索
				</Button>
			</Container>
			<Table
				id="table1"
				columns={data.columns}
				rows={data.rows}
				checkboxSelection
				hideFooterPagination
				onSelectionModelChange={(param) => {
					// console.log(param);
					// setSelectData(param.row);
				}}
			/>

			<Container className={classes.container}>
				<TextField
					className={classes.input}
					id="standard-basic2"
					label="問屋"
				/>
				<Button
					className={classes.button}
					variant="contained"
					color="inherit"
					onClick={() => {
						const newRows2 = data2.rows.map((row) => {
							row.id = Math.random().toString();
							row.name = '1111111111';
							return row;
						});
						// setSelectData({});
						setData2((prev) => ({ ...prev, rows: newRows2 }));
					}}
				>
					問屋検索
				</Button>
			</Container>
			<Table
				id="table2"
				columns={data2.columns}
				rows={data2.rows}
				// checkboxSelection
				hideFooterPagination
				// onRowClick={(param) => {
				// 	setSelectData(param.row);
				// }}
			/>

			<Container className={classes.container}>
				<Button
					className={classes.button}
					variant="contained"
					color="inherit"
					onClick={() => {
						const newRows = data2.rows.map((row) => {
							row.id = Math.random().toString();
							return row;
						});
						// setSelectData({});
						setData2((prev) => ({ ...prev, rows: newRows }));
					}}
				>
					実行
				</Button>
			</Container>
		</>
	);
};

export default PointCharge;
