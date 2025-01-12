import appServices from '@app-services';
import { LoginParams, LoginResult } from 'model/auth';
import { ApiConstants } from './networking/app-apis';

async function login(params: LoginParams) {
  try {
    const rs = await appServices.post(ApiConstants.LOGIN, params);
    const data = rs.data as LoginResult;
    return data;
  } catch (error) {}
}

async function logout() {
  try {
    const rs = await appServices.post(ApiConstants.LOGOUT);
    const data = rs.data;
    return data;
  } catch (error) {}
}

const authServices = {
  login,
  logout
};

export default authServices;
