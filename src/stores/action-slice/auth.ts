import { LOGIN, LOGOUT } from '@redux-action-type/auth';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginParams, LoginResult, User } from 'model/auth';
import { SLICE_NAME } from 'stores/types';

export interface AuthState {
  user: User;
  token: string;
  loginLoading: boolean;
}

export const initialAuth: AuthState = {
  user: {
    fullName: '',
    userId: null
  },
  token: '',
  loginLoading: false
};

const authSlice = createSlice({
  name: SLICE_NAME.AUTH,
  initialState: initialAuth,
  reducers: {
    reset: () => initialAuth,
    startLogin: (state) => {
      state.loginLoading = true;
    },
    endLogin: (state) => {
      state.loginLoading = false;
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    }
  }
});

const login = createAction(LOGIN, (body: LoginParams, onSuccess: (data: LoginResult) => void, onFailed: () => void) => ({
  payload: { body, onSuccess, onFailed }
}));

const logout = createAction(LOGOUT, () => ({ payload: {} }));

export const authActions = {
  ...authSlice.actions,
  login,
  logout
};

export const authReducer = authSlice.reducer;
