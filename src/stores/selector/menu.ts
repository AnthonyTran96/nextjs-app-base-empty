import { createDeepEqualSelector } from 'stores/@extends';
import { RootState } from 'stores/store/all-reducers';

export const selectMenuMasterLoading = createDeepEqualSelector(
  (state: RootState) => state?.menu,
  (menu) => menu.menuMasterLoading
);

export const selectMenuMaster = createDeepEqualSelector(
  (state: RootState) => state.menu,
  (menu) => menu.menuMaster
);
