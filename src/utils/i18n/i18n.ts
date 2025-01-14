import { getState } from '@redux-common';
import { LANGUAGE_TYPE } from '@redux-slice';
import type { LanguageDetectorAsyncModule, Resource } from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SLICE_NAME } from 'stores/types';
import { resources } from './locales';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  // eslint-disable-next-line consistent-return
  detect: (callback: (lng: string | readonly string[] | undefined) => void) => {
    const appStore = getState(SLICE_NAME.APP);
    if (!appStore || !appStore.language) {
      return callback(LANGUAGE_TYPE.vi);
    }
    return callback(appStore.language);
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

export const initOptionsI18n = (source: Resource) => {
  return {
    fallbackLng: LANGUAGE_TYPE.vi,

    resources: source,
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    cache: {
      enabled: true
    }
  };
};

export const changeLanguage = (type: LANGUAGE_TYPE) => {
  i18n.changeLanguage(type || LANGUAGE_TYPE.vi);
};
i18n.use(languageDetector).use(initReactI18next).init(initOptionsI18n(resources));

export default i18n;

export function changeHotlineI18n(hotline: string) {
  i18n.init({
    ...initOptionsI18n(resources),
    interpolation: {
      defaultVariables: {
        ...i18n.options.interpolation?.defaultVariables,
        hotline
      },
      escapeValue: false
    },
    lng: i18n.language
  });
}
