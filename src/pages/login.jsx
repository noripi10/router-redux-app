import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionLogin } from '../redux/actions/auth';
import { useLogin } from '../context/AuthProvider';

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
  background-color: #96aeee;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 80px;
  height: 24px;
  text-align: center;
  border-radius: 6px;
  border: none;
  &:focus {
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
  &:hover {
    background-color: #2f82e0;
    color: #fff;
  }
`;

const Wait = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  z-index: 10;
`;

const Login = () => {
  const login = useLogin();
  const [userId, setUserID] = useState('');
  const [wait, setWait] = useState(false);

  const textChange = (e) => {
    setUserID(e.target.value);
  };

  const keyDown = (e) => {
    if (e.keyCode === 13) {
      loginHandle(e);
    }
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    if (!userId) {
      return false;
    }

    // ログイン処理中な感じに
    setWait(true);
    // const result = await new Promise((resolve, reject) => {
    //   try {
    //     setTimeout(() => {
    //       resolve('OK');
    //     }, 1000);
    //   } catch {
    //     reject('NG');
    //   }
    // });
    // if (result === 'OK') {
    //   login(userId);
    // }
    login(userId);
    setWait(false);
  };

  useEffect(() => {
    const localUserId = localStorage.getItem('router-redux-auth-user-id');
    if (localUserId) {
      setUserID(localUserId);
    }
  }, []);

  return (
    <>
      <Container>
        <div>
          <span>社員ID：</span>
          <Input type="text" onChange={textChange} onKeyDown={keyDown} value={userId} autoFocus />
        </div>
        <Button onClick={loginHandle}>ログイン</Button>
      </Container>
      {wait && (
        <Wait>
          <CircularProgress color="primary" />
        </Wait>
      )}
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
