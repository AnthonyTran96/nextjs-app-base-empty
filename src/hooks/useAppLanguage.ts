import { selectLanguage } from '@redux-selector/app';
import { useDispatch, useSelector } from 'react-redux';

import { changeLanguage } from 'utils/i18n/i18n';
import { appActions, LANGUAGE_TYPE } from '../stores/action-slice/app';

export const useAppLanguage = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);

  const setLanguageApp = (language: LANGUAGE_TYPE) => {
    dispatch(appActions.setLanguage(language));
    changeLanguage(language);
  };

  return { currentLanguage, setLanguageApp };
};
