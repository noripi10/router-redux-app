import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthProvider';
import { HeaderBar, MenuItem } from '../components';

const Home = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <HeaderBar title={'ホーム'} />
      {/* <div>
        <button onClick={() => history.push('/point-charge')}>
          プロフィール
        </button>
      </div> */}
      <Container>
        <MenuItem />
      </Container>
    </>
  );
};

export default Home;
