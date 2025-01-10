import { createDeepEqualSelector } from 'stores/@extends';
import { RootState } from 'stores/store/all-reducers';

export const selectSnackbar = createDeepEqualSelector(
  (state: RootState) => state.snackbar,
  (snackbar) => snackbar
);
