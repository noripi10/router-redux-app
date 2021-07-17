import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { AuthContext } from '../context/AuthProvider';
import { MenuItem } from '../components';

import { useEnterKeyFocusControl } from '../hooks/useEnterKeyFocusControl';
import { Input } from '../components';
const useClasses = makeStyles((theme) => ({
  titleContainer: {
    margin: 12,
    marginLeft: 24,
  },
}));

const Home = () => {
  const classes = useClasses();
  // const { logout } = useContext(AuthContext);
  // const history = useHistory();
  // const auth = useSelector((state) => state.auth);

  const registerController = useEnterKeyFocusControl();

  return (
    <>
      <Container className={classes.titleContainer}>
        <Typography variant="h6"> メニュー一覧</Typography>
      </Container>
      <Container>
        <MenuItem />
      </Container>
      <Container>
        {[...Array(10).keys()].map((key, index) => {
          return <Input key={key} {...{ index, registerController }} />;
        })}
      </Container>
    </>
  );
};

export default Home;
