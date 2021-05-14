import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const menuList = [
  {
    title: 'ポイントチャージ一括登録',
    width: '30%',
    path: '/point-charge',
  },
  {
    title: 'dummy1',
    width: '30%',
  },
  {
    title: 'dummy2',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
    backgroundColor: '#bbcdf5',
    borderRadius: 16,
    margin: 6,
    marginTop: 32,
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    borderRadius: 16,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: 16,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
    borderRadius: 16,
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  menuTitle: {
    margin: 8,
    marginTop: 16,
  },
}));

export default function MenuItem() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Typography className={classes.menuTitle} component='h6'>
        メニュー一覧
      </Typography>
      <div className={classes.root}>
        {menuList.map((menu) => (
          <ButtonBase
            focusRipple
            key={menu.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: menu.width,
            }}
            onClick={() => history.push(menu.path)}
          >
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component='span'
                variant='subtitle1'
                color='inherit'
                className={classes.imageTitle}
              >
                {menu.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    </>
  );
}
