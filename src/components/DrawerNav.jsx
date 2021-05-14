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
import InboxIcon from '@material-ui/icons/MoveToInbox';
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

	return (
		<Drawer open={open} onClose={() => setOpen(false)}>
			<div>
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
		</Drawer>
	);
};
