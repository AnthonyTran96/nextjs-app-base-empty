import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { subscribeActionMiddleware } from 'stores/@extends/middleware/redux-subscribe-action';
import { SLICE_NAME } from 'stores/types';
import storePersist from '../@extends/storePersist';
import { listenerMiddleware } from '../listener';
import { allReducer } from './all-reducers';

export const PERSIST_KEY = 'persist_key';

const devMode = process.env.NODE_ENV !== 'production';

// const makeConfiguredStore = () =>
//   configureStore({
//     reducer: allReducer,
//     devTools: true
//   });

export const makeStore = () => {
  // const isServer = typeof window === 'undefined';

  // if (isServer) {
  //   return makeConfiguredStore();
  // }

  const persistConfig = {
    key: PERSIST_KEY,
    whitelist: [SLICE_NAME.APP, SLICE_NAME.AUTH],
    storage: storePersist
  };

  const persistedReducer: any = persistReducer(persistConfig, allReducer);

  const middlewares = [subscribeActionMiddleware];

  const store: any = configureStore({
    reducer: persistedReducer,
    devTools: devMode,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({ serializableCheck: false })
        .prepend(listenerMiddleware.middleware)
        .concat(middlewares)
  });
  store.__persistor = persistStore(store);
  return store;
};

export default makeStore();
