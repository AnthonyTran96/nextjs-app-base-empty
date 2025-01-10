import { combineReducers } from '@reduxjs/toolkit';
import { menuReducer, snackbarReducer } from 'stores/action-slice';

export const allReducer = combineReducers({
  menu: menuReducer,
  snackbar: snackbarReducer
});

export type RootState = ReturnType<typeof allReducer>;
