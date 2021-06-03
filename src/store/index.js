import Cookies from 'cookies-js';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import storage from 'redux-persist/lib/storage';
import { reducer as rootReducer } from './reducer';

// local-storageへ保存
// eslint-disable-next-line
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

// cookieへ保存
// eslint-disable-next-line
const persistCookiesConfig = {
  key: 'root-cookies',
  storage: new CookieStorage(Cookies, { expiration: { default: 1000 * 10 } }),
};

const persistedReducer = persistReducer(persistCookiesConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persister = persistStore(store);
export default store;

export const bareStore = createStore(rootReducer);
