import { createDeepEqualSelector } from '@redux-common';
import { RootState } from '@store/all-reducers';

export const selectMenuMasterLoading = createDeepEqualSelector(
  (state: RootState) => state?.menu,
  (menu) => menu.menuMasterLoading
);

export const selectMenuMaster = createDeepEqualSelector(
  (state: RootState) => state.menu,
  (menu) => menu.menuMaster
);
