import { ENVConfig } from 'config/env';

const { ENV } = ENVConfig;

export class DebugUtils {
  public static logS(params?: any) {
    if (ENV === 'development') {
      this.debug('=======================================>');
      this.debug(params);
      this.debug('=======================================>');
    }
  }

  public static debug(_params?: any) {
    if (ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(_params);
    }
  }
}
