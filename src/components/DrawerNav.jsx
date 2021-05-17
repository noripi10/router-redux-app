import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { Inbox as InboxIcon, ExitToApp as ExitIcon, Home as HomeIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { actionLogout } from '../redux/actions/auth';

import { MENU_LIST } from '../data/menu';

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: 300,
    },
  })
);

export const DrawerNav = ({ open, setOpen, ...otherProps }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <div>
        <List className={classes.list}>
          <ListItem button onClick={() => history.push('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </ListItem>
        </List>
        <Divider />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <List className={classes.list}>
          {MENU_LIST.map((MENU) => (
            <React.Fragment key={MENU.title}>
              <ListItem button onClick={() => history.push(MENU.path)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={MENU.title} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>
      <div>
        <List className={classes.list}>
          <ListItem button onClick={() => dispatch(actionLogout())}>
            <ListItemIcon>
              <ExitIcon />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
