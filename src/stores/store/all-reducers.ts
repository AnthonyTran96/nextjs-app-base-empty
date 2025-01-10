import { menuReducer, snackbarReducer } from '@redux-slice';
import { combineReducers } from '@reduxjs/toolkit';

export const allReducer = combineReducers({
  menu: menuReducer,
  snackbar: snackbarReducer
});

export type RootState = ReturnType<typeof allReducer>;
