import { combineReducers } from '@reduxjs/toolkit';

export const allReducer = combineReducers({});

export type RootState = ReturnType<typeof allReducer>;
