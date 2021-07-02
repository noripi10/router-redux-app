import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Login2 = () => {
  return (
    <LoginForm>
      <h2>Login2</h2>
      <Formik
        initialValues={{ userId: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values));
        }}
        validationSchema={Yup.object().shape({
          userId: Yup.string().required('ユーザーIDは必須入力です'),
          password: Yup.string().required('パスワードは必須入力です'),
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
              {touched.userId && errors.userId && <div>{errors.userId}</div>}
            </Div>
            <Div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && <div>{errors.password}</div>}
            </Div>
            <button type="submit">ログイン</button>
          </form>
        )}
      </Formik>
    </LoginForm>
  );
};

export default Login2;
