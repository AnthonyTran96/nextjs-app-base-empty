import { createDeepEqualSelector } from '@redux-common';
import { initialAuth } from '@redux-slice';
import { RootState } from '@store/all-reducers';

const selectDomain = (state: RootState) => state?.auth || initialAuth;

export const selectLoginLoading = createDeepEqualSelector(
  selectDomain,
  (auth) => auth.loginLoading
);

export const selectUserInfo = createDeepEqualSelector(selectDomain, (auth) => auth.user);
