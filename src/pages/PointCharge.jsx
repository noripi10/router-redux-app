import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, makeStyles } from '@material-ui/core';
import { HeaderBar } from '../components';
import { AppButton, Table } from '../components';

const initRows = [
  { id: 0, code: '000', name: 'aaa' },
  { id: 1, code: '001', name: 'bbb' },
  { id: 2, code: '002', name: 'ccc' },
  { id: 3, code: '003', name: 'ddd' },
  { id: 4, code: '004', name: 'eee' },
];

const initRows2 = [
  { id: 5, code: '005', name: 'aaa' },
  { id: 6, code: '006', name: 'bbb' },
  { id: 7, code: '007', name: 'ccc' },
  { id: 8, code: '008', name: 'ddd' },
  { id: 9, code: '009', name: 'eee' },
];

const initColumns = Object.keys(initRows[0]).map((key, i) => ({
  field: key,
  hide: key === 'id' ? true : false,
  width: (i + 1) * 200,
  renderHeader: (params) => {
    return (
      <span role="img" aria-label="enjoy">
        {params.field}🦖
      </span>
    );
  },
}));

const initColumns2 = Object.keys(initRows2[0]).map((key, i) => ({
  field: key,
  headerName: key.toUpperCase(),
  hide: key === 'id' ? true : false,
  width: (i + 1) * 200,
}));

const useClasses = makeStyles((theme) => ({
  container: {
    margin: 'auto 48px',
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    marginTop: 32,
    textAlign: 'right',
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
  const [data, setData] = useState({ rows: [], columns: [] });
  const [data2, setData2] = useState({ rows2: [], columns2: [] });
  // const [selectData, setSelectData] = useState({});

  useEffect(() => {
    setData({ rows: initRows, columns: initColumns });
    setData2({ rows2: initRows2, columns2: initColumns2 });
  }, []);
  return (
    <>
      <HeaderBar title="一括登録" />
      {/* 請求先 */}
      <Container className={classes.container} fixed>
        <TextField className={classes.input} id="standard-basic1" label="請求先" autoFocus />
        <AppButton
          onClick={(e) => {
            e.preventDefault();

            const newRows = data.rows.map((row, index) => {
              row.name = index.toString() + 'table1';
              return row;
            });

            setData((prev) => ({ ...prev, rows: newRows }));
          }}>
          請求先検索
        </AppButton>
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

      {/* 問屋 */}
      <Container className={classes.container}>
        <TextField className={classes.input} id="standard-basic2" label="問屋" />
        <AppButton
          onClick={(e) => {
            e.preventDefault();

            const newRows2 = data2.rows2.map((row, index) => {
              row.id = index.toString() + 'table2';
              row.name = '1111111111';
              return row;
            });

            setData2((prev) => ({ ...prev, rows2: newRows2 }));
          }}>
          問屋検索
        </AppButton>
      </Container>
      <Table id="table2" columns={data2.columns2} rows={data2.rows2} hideFooterPagination />

      <Container className={classes.footerContainer}>
        <Button className={classes.button} variant="contained" color="inherit">
          実行
        </Button>
      </Container>
    </>
  );
};

export default PointCharge;
