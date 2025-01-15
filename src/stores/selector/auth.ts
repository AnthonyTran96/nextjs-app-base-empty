import { createDeepEqualSelector } from '@redux-common';
import { RootState } from '@store/all-reducers';
import { initialAuth } from 'stores/action-slice/auth';

const selectDomain = (state: RootState) => state?.auth || initialAuth;

export const selectLoginLoading = createDeepEqualSelector(
  selectDomain,
  (auth) => auth.loginLoading
);

export const selectUserInfo = createDeepEqualSelector(selectDomain, (auth) => auth.user);

export const selectToken = createDeepEqualSelector(selectDomain, (auth) => auth.token);
