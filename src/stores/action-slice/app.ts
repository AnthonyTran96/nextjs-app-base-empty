import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'stores/types';

export enum LANGUAGE_TYPE {
  vi = 'vi',
  en = 'en'
}

export interface AppState {
  language: LANGUAGE_TYPE;
}

export const initialApp: AppState = {
  language: LANGUAGE_TYPE.vi
};

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialApp,
  reducers: {
    setLanguage(state, { payload }: PayloadAction<LANGUAGE_TYPE>) {
      state.language = payload;
    }
  }
});

export const appActions = {
  ...appSlice.actions
};

export const appReducer = appSlice.reducer;
