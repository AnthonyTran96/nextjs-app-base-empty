import { createDeepEqualSelector } from '@redux-common';
import { RootState } from '@store/all-reducers';

export const selectSnackbar = createDeepEqualSelector(
  (state: RootState) => state.snackbar,
  (snackbar) => snackbar
);
