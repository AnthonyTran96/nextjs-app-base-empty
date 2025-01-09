import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { listenerMiddleware } from 'stores/extends/middleware/listener';
import { subscribeActionMiddleware } from 'stores/extends/middleware/redux-subscribe-action';
import storePersist from '../extends/storePersist';
import { allReducer } from './all-reducers';

export const PERSIST_KEY = 'htc_persist_key';

const devMode = process.env.ENV !== 'production';

const makeConfiguredStore = () =>
  configureStore({
    reducer: allReducer,
    devTools: true
  });

export const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore();
  }

  const persistConfig = {
    key: PERSIST_KEY,
    whitelist: ['auth'],
    storage: storePersist
  };

  const persistedReducer: any = persistReducer(persistConfig, allReducer);

  const middlewares = [subscribeActionMiddleware];

  const store: any = configureStore({
    reducer: persistedReducer,
    devTools: devMode,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({ serializableCheck: false }).prepend(listenerMiddleware.middleware).concat(middlewares)
  });
  configureStore({
    reducer: persistedReducer,
    devTools: devMode,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({ serializableCheck: false }).prepend(listenerMiddleware.middleware).concat(middlewares)
  });

  store.__persistor = persistStore(store);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export default makeStore();
