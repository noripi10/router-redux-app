import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { useLoginThunk } from '../context/AuthProvider';

const LoginForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  background: #ddd;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 8px;
`;

// const Form = styled.form`
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   background: blue;
//   button {
//     &:hover {
//       background: yellow;
//     }
//   }
// `;

const Error = styled.div`
  color: red;
  font-size: 11px;
  text-align: right;
`;

const Login2 = () => {
  const loginThunk = useLoginThunk();

  return (
    <LoginForm id="login-form">
      <Div>
        <h2>ログイン画面</h2>
      </Div>
      <Formik
        initialValues={{ userId: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log({ values });
          loginThunk(values.userId);
        }}
        validationSchema={Yup.object().shape({
          userId: Yup.string().required('ユーザーIDは必須入力です'),
          // password: Yup.string().required('パスワードは必須入力です'),
        })}>
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Div>
              <input
                type="text"
                name="userId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userId}
              />
              {touched.userId && errors.userId && <Error>{errors.userId}</Error>}
            </Div>
            {/* <Div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && <div>{errors.password}</div>}
            </Div> */}
            <button type="submit">ログイン</button>
          </form>
        )}
      </Formik>
    </LoginForm>
  );
};

export default Login2;
