import { ENVConfig } from './env';

export const CODE_DEFAULT = -200;
export const CODE_SUCCESS = 200;
export const ERROR_NETWORK_CODE = -100;
export const RESULT_CODE_PUSH_OUT = 401;
export const TIME_OUT = 1 * 60 * 1000; //config timeout 1m
export const CANCEL_REQUEST_TIME = 1 * 60 * 1000; // 1m
export const STATUS_TIME_OUT = 'ECONNABORTED';
export const STATUS_ERROR_NETWORK = 'ERR_NETWORK';
export const CODE_TIME_OUT = 408;
export const LOAD_FAKE = false;
export const HIDE_PILOT_FEATURE = ENVConfig.ENV === 'Production';
