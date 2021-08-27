import Cookies from 'cookies-js';
import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// import createSagaMiddleware from '@redux-saga/core';
// combined reducer
import { reducer as rootReducer } from './reducer';

// ミドルウェア関係（redux-logger, redux-thunk）
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
// const sagaMiddleware = createSagaMiddleware();
const middleware = composeEnhancers(applyMiddleware(logger, thunk));

//---------------------------------------------------------------------------------
// データ永続化場所選定
// local-storageへ保存
// eslint-disable-next-line
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};
// session-storageへ保存
// eslint-disable-next-line
const persistSessionConfig = {
  key: 'session',
  storage: sessionStorage,
  whitelist: ['auth'],
};
// cookieへ保存
// eslint-disable-next-line
const persistCookiesConfig = {
  key: 'root-cookies',
  storage: new CookieStorage(Cookies, { expiration: { default: 1000 * 10 } }),
};

const persistedReducer = persistReducer(persistSessionConfig, rootReducer);

//------------------------------------------------------------------------------------------------
// ストア作成
const store = createStore(persistedReducer, middleware);
// sagaMiddleware.run(rootSaga);

export const persister = persistStore(store);
export default store;
