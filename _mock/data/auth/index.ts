import { LoginResult, LogoutResult } from 'model/auth';

export const fakeLogin: LoginResult = {
  data: {
    userId: 1,
    fullName: 'AnthonyTran',
    accessToken: '12345678910'
  },
  code: 0
};

export const fakeLogout: LogoutResult = {
  code: 0,
  message: 'Đăng xuất thành công',
  data: null
};
