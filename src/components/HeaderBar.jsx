import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitIcon from '@material-ui/icons/ExitToApp';

import { useAuth, useLogout } from '../context/AuthProvider';
import { useSelector } from 'react-redux';
import { DrawerNav } from './DrawerNav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#459',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HeaderBar = (props) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const isAuthenticated = useAuth();
  const logout = useLogout();

  const auth = useSelector((state) => state.auth);

  const drawerToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {isAuthenticated && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                title="ログアウト"
                onClick={drawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
            {isAuthenticated && (
              <>
                <Typography variant="h6">{auth.USER_ID}</Typography>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="logout"
                  onClick={logout}>
                  <ExitIcon />
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <DrawerNav {...{ open, setOpen }} />
    </>
  );
};

export default HeaderBar;
