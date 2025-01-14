import { createDeepEqualSelector } from '@redux-common';
import { initialApp } from '@redux-slice';
import { RootState } from '@store/all-reducers';

const selectDomain = (state: RootState) => state?.app || initialApp;

export const selectLanguage = createDeepEqualSelector(selectDomain, (app) => app.language);
