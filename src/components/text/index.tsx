import React from 'react';
import { useTranslation } from 'react-i18next';
import { I18nKeys } from 'utils/i18n/locales';

interface TextProps {
  t18n?: I18nKeys | string;
  text?: string;
  preset?: string;
  classNames?: string;
  onClick?: () => void;
  t18nOptions?: any;
  children?: React.ReactNode;
  style?: any;
}
export const TextBase = (props: TextProps) => {
  const { t18n, text, preset, classNames = '', t18nOptions, children, ...rest } = props;
  const [t] = useTranslation();
  const i18nText = t18n && t(t18n, t18nOptions);
  const content: any = i18nText || text || children;
  return (
    <div className={`${preset} ${classNames}`} {...rest}>
      {i18nText && text ? `${text} ${i18nText}` : content}
    </div>
  );
};
