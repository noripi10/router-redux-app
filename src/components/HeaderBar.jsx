import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '../context/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogout } from '../redux/actions/auth';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HeaderBar = (props) => {
  const classes = useStyles();
  const isAuthenticated = useAuth();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position='static' color={'primary'}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {props.title}
          </Typography>
          {isAuthenticated && (
            <>
              <Typography variant='h6'>{auth.USER_ID}</Typography>
              <Button color='inherit' onClick={() => dispatch(actionLogout())}>
                ログアウト
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
