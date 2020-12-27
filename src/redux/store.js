import AsyncStorage from '@react-native-async-storage/async-storage'
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const persistConfig = {
  //...
  key: 'root',
  storage: AsyncStorage,
  whiteList : ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger),
);
let persistor = persistStore(store);
export {store, persistor};
