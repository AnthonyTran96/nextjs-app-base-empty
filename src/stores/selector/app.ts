import { createDeepEqualSelector } from '@redux-common';
import { RootState } from '@store/all-reducers';
import { initialApp } from 'stores/action-slice/app';

const selectDomain = (state: RootState) => state?.app || initialApp;

export const selectLanguage = createDeepEqualSelector(selectDomain, (app) => app.language);
