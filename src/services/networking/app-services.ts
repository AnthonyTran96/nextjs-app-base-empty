import { CLEAR_STORE } from '@redux-action-type/auth';
import { dispatch, getState } from '@redux-common';
import axios, { AxiosRequestConfig } from 'axios';
import { ENVConfig } from 'config/env';
import { ROUTES } from 'config/routes';
import { SLICE_NAME } from 'stores/types';

const appServices = axios.create({ baseURL: ENVConfig.API_URL });

// ==============================|| AXIOS - FOR APP SERVICES ||============================== //

/**
 * Request interceptor to add Authorization token to request
 */
appServices.interceptors.request.use(
  async (config) => {
    const { token } = getState(SLICE_NAME.AUTH);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

appServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      [401, 403].includes(error.response.status) &&
      !window.location.href.includes(ROUTES.LOGIN)
    ) {
      dispatch({ type: CLEAR_STORE });
      // window.location.pathname = ROUTES.LOGIN;
    }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export default appServices;

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await appServices.get(url, { ...config });

  return res.data;
};

export const fetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await appServices.post(url, { ...config });

  return res.data;
};
