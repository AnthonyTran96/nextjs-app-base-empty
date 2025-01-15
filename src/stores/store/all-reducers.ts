import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from 'stores/action-slice/app';
import { authReducer } from 'stores/action-slice/auth';

export const allReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof allReducer>;
