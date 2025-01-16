import { ENVConfig } from 'config/env';
import { whiteListEnv } from 'config/pilot';

export const envAllow = !!ENVConfig.ENV && whiteListEnv.includes(ENVConfig.ENV);

export const wrapFuntionPilot = <T, A extends any[]>(
  fn: (...args: A) => T,
  customAction?: (...args: Partial<A>) => T
) => {
  if (!envAllow) {
    if (!customAction) return () => {};
    return customAction;
  }

  return fn;
};

export const wrapAndFilterPilot = <T>(array: T[], condition: (element: T) => boolean) => {
  if (!envAllow) return array.filter((element) => condition(element));

  return array;
};
