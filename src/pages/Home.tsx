import React from 'react';
import { Container, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { AuthContext } from '../context/AuthProvider';
import { MenuItem } from '../components';

import { useEnterKeyFocusControl, useKeyDownControl } from '../hooks/useEnterKeyFocusControl';
import { Input } from '../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flex: 1,

      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#ddd',
      padding: '24px',
    },
  })
);

const useClasses = makeStyles((theme) => ({
  titleContainer: {
    margin: 12,
    marginLeft: 24,
  },
}));

const Home: React.FC = () => {
  const classes = useClasses();
  const styles = useStyles();

  // const { logout } = useContext(AuthContext);
  // const history = useHistory();
  // const auth = useSelector((state) => state.auth);

  const registerController = useKeyDownControl();

  return (
    <>
      <Container className={classes.titleContainer}>
        <Typography variant="h6"> メニュー一覧</Typography>
      </Container>
      <Container>
        <MenuItem />
      </Container>
      <Container className={styles.container}>
        {[...Array(10).keys()].map((key: number, index: number) => {
          return <Input key={key} {...{ index, registerController }} />;
        })}
      </Container>
    </>
  );
};

export default Home;
