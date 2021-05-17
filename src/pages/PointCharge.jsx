import React, { useState, useEffect } from 'react';
import {
  TextField,
  Container,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import { SuggestionField } from '../components';
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
  width: (i + 1) * 150,
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
  hide: key === 'id' ? true : false,
  width: (i + 1) * 150,
  // headerName: key,
  renderHeader: (params) => {
    return (
      <span role="img" aria-label="enjoy">
        {params.field}
      </span>
    );
  },
}));

const useClasses = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    margin: 12,
    marginLeft: 24,
  },
  container: {
    margin: '6px 28px',
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    marginTop: 8,
    textAlign: 'right',
  },
  input: {
    minWidth: 200,
    fontSize: 14,
    margin: 8,
  },
  numberInput: {
    textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PointCharge = () => {
  const classes = useClasses();
  const [data, setData] = useState({ rows: [], columns: [] });
  const [data2, setData2] = useState({ rows2: [], columns2: [] });
  // const [selectData, setSelectData] = useState({});

  const [shohin, setShohin] = useState('');
  const [tekiyoDate, setTekiyoData] = useState();
  const [tanka, setTanka] = useState(0);

  useEffect(() => {
    setData({ rows: initRows, columns: initColumns });
    setData2({ rows2: initRows2, columns2: initColumns2 });
  }, []);
  return (
    <>
      <Container className={classes.titleContainer}>
        <Typography variant="h6">一括登録</Typography>
      </Container>

      {/* 請求先 */}
      <Container className={classes.container}>
        {/* <TextField className={classes.input} id="standard-basic1" label="請求先" autoFocus /> */}
        <SuggestionField />

        <AppButton
          onClick={(e) => {
            e.preventDefault();

            const demo_data = document.getElementById('asynchronous-demo');
            console.log(demo_data.value);

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

      <Grid className={classes.container} container spacing={4}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label" shrink>
              商品
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              className={classes.selectEmpty}
              value={shohin}
              onChange={(e) => setShohin(e.target.value)}>
              <MenuItem value="">
                <em>未選択</em>
              </MenuItem>
              <MenuItem value={10000}>10000 T-11 赤</MenuItem>
              <MenuItem value={10100}>10100 H4-11</MenuItem>
              <MenuItem value={10800}>10800 H2-11</MenuItem>
            </Select>
          </FormControl>

          <TextField
            className={classes.input}
            id="tekiyo-date"
            label="摘要日"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            value={tekiyoDate}
            onChange={(e) => setTekiyoData(e.target.value)}
          />
          <TextField
            className={classes.input}
            id="standard-basic2"
            label="単価"
            type="number"
            inputProps={{
              style: { textAlign: 'right' },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            value={tanka}
            onChange={(e) => setTanka(e.target.value)}
            // onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>

      <Container className={classes.footerContainer}>
        <AppButton
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => {
            console.log({ shohin, tekiyoDate, tanka });
          }}>
          実行
        </AppButton>
      </Container>
    </>
  );
};

export default PointCharge;
