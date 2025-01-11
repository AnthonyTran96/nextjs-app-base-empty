import { createDeepEqualSelector } from '@redux-common';
import { initialSnackbar } from '@redux-slice';
import { RootState } from '@store/all-reducers';

const selectDomain = (state: RootState) => state?.snackbar || initialSnackbar;

export const selectSnackbar = createDeepEqualSelector(selectDomain, (snackbar) => snackbar);
