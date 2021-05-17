import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { AuthContext } from '../context/AuthProvider';
import { MenuItem } from '../components';

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

  return (
    <>
      <Container className={classes.titleContainer}>
        <Typography variant="h6"> メニュー一覧</Typography>
      </Container>
      <Container>
        <MenuItem />
      </Container>
    </>
  );
};

export default Home;
