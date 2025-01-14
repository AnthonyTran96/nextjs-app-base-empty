import { appReducer, authReducer } from '@redux-slice';
import { combineReducers } from '@reduxjs/toolkit';

export const allReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof allReducer>;
