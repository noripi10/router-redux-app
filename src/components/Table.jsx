import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    color: theme.palette.type === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: theme.palette.type === 'light' ? '#eee' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
      borderRight: `0.5px solid ${theme.palette.type === 'light' ? '#ddd' : '#aaa'}`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `0.5px solid ${theme.palette.type === 'light' ? '#eee' : '#aaa'}`,
    },
    '& .MuiDataGrid-cell': {
      color: theme.palette.type === 'light' ? 'rgba(0,0,0,.85)' : '#aaa)',
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    },
    '& .MuiDataGrid-footer': {
      display: 'none',
    },
  },
}));

const Table = (props) => {
  const classes = useStyles();

  return (
    <div style={{ height: 250, width: '95%', margin: '10px auto' }}>
      <DataGrid {...props} className={classes.grid} columnBuffer={2} rowHeight={24} />
    </div>
  );
};

export default Table;
