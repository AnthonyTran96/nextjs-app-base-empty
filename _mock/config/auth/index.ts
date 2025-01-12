import { fakeLogin, fakeLogout } from '@mock/data/auth';
import { MockApiConfig } from '@mock/types';
import { LoginParams, LoginResult, LogoutResult } from 'model/auth';
import { ApiConstants } from 'services/networking/app-apis';

export const mockAuthApis: MockApiConfig[] = [
  {
    name: 'login',
    url: ApiConstants.LOGIN,
    method: 'post',
    // status: 201,
    delay: 500,
    handler: (body: LoginParams): LoginResult => {
      return fakeLogin;
    }
  },
  {
    name: 'logout',
    url: ApiConstants.LOGOUT,
    method: 'post',
    handler: (): LogoutResult => {
      return fakeLogout;
    }
  }
];
