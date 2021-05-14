import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthProvider';
import { HeaderBar } from '../components';

const PointCharge = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <HeaderBar title='ポイントチャージ一括登録' />
      <div>
        <div>{JSON.stringify(auth)}</div>
        <button onClick={() => history.push('/')}>ホーム</button>
      </div>
    </>
  );
};

export default PointCharge;
