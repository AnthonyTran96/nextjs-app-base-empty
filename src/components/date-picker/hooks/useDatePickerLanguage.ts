// eslint-disable-next-line import/no-extraneous-dependencies
import 'dayjs/locale/en';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'dayjs/locale/vi';

import { LANGUAGE_TYPE } from '@redux-slice';
import localeEN from 'antd/lib/date-picker/locale/en_US';
import localeVN from 'antd/lib/date-picker/locale/vi_VN';
import { useEffect, useState } from 'react';
import { useAppLanguage } from '../../../hooks/useAppLanguage';

export const useDatePickerLanguage = () => {
  const { currentLanguage } = useAppLanguage();
  const [locale, setLocale] = useState(localeVN);
  const [placeholder, setPlaceholder] = useState('dd/mm/yyyy');
  const [format, setFormat] = useState('DD/MM/YYYY');
  useEffect(() => {
    switch (currentLanguage) {
      case LANGUAGE_TYPE.en:
        setLocale(localeEN);
        setPlaceholder('dd/mm/yyyy');
        setFormat('DD/MM/YYYY');
        break;
      case LANGUAGE_TYPE.vi:
        setLocale(localeVN);
        setPlaceholder('dd/mm/yyyy');
        setFormat('DD/MM/YYYY');
        break;
      default:
        setLocale(localeVN);
        setPlaceholder('dd/mm/yyyy');
        setFormat('DD/MM/YYYY');
    }
  }, [currentLanguage]);
  return {
    locale,
    placeholder,
    format
  };
};
