import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionLogin } from '../redux/actions/auth';
import { AuthContext } from '../context/AuthProvider';
import { HeaderBar } from '../components';
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: auto;
  flex-direction: column;
  background-color: #ddd;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 80px;
  height: 24px;
  text-align: center;
  border-radius: 6px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2ps #2f82e0;
  }
`;

const Button = styled.button`
  color: #2f82e0;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2f82e0;
  border-radius: 3px;
  width: 200px;
  text-align: center;
`;

const Login = () => {
  const { login } = useContext(AuthContext);
  const [userId, setUserID] = useState('');

  const textChange = (e) => {
    setUserID(e.target.value);
  };
  const loginHandle = (e) => {
    e.preventDefault();
    if (!userId) {
      return false;
    }
    login(userId);
  };

  useEffect(() => {
    const localUserId = localStorage.getItem('router-redux-auth-user-id');
    if (localUserId) {
      setUserID(localUserId);
    }
  }, []);

  return (
    <>
      <HeaderBar title='MILNETマスターメンテナンス' />
      <Container>
        <div>
          <span>社員ID：</span>
          <Input type='text' onChange={textChange} value={userId} />
        </div>
        <Button onClick={loginHandle}>ログイン</Button>
      </Container>
    </>
  );
};

export default connect(
  (state) => {
    const { auth } = state;
    return {
      auth,
    };
  },
  (dispatch) => bindActionCreators({ actionLogin }, dispatch)
)(Login);
