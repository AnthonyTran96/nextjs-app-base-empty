import { createDeepEqualSelector } from '@redux-common';
import { initialMenu } from '@redux-slice';
import { RootState } from '@store/all-reducers';

const selectDomain = (state: RootState) => state?.menu || initialMenu;

export const selectMenuMasterLoading = createDeepEqualSelector(
  selectDomain,
  (menu) => menu.menuMasterLoading
);

export const selectMenuMaster = createDeepEqualSelector(selectDomain, (menu) => menu.menuMaster);
