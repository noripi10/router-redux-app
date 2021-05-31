import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useClasses = makeStyles((theme) => ({
  button: {
    width: 120,
    height: 36,
  },
}));

const AppButton = React.memo(({ children, color, ...ButtonProps }) => {
  const classes = useClasses();

  return (
    <Button
      {...ButtonProps}
      className={classes.button}
      variant="contained"
      color={color || 'default'}>
      {children}
    </Button>
  );
});

export default AppButton;
