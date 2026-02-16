'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { I18nKeys } from 'utils/i18n/locales';

interface TextProps {
  t18n?: I18nKeys | string;
  text?: string;
  preset?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'sub-title1'
    | 'sub-title2'
    | 'sub-title3'
    | 'sub-title4'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption1'
    | 'caption2'
    | 'caption3';
  className?: string;
  onClick?: () => void;
  t18nOptions?: any;
  children?: React.ReactNode;
  style?: any;
}
export const TextBase = (props: TextProps) => {
  const { t18n, text, preset, className = '', t18nOptions, children, ...rest } = props;
  const [t] = useTranslation();
  const i18nText = t18n && t(t18n, t18nOptions);
  const content: any = i18nText || text || children;
  return (
    <div className={`${preset} ${className}`} {...rest}>
      {i18nText && text ? `${text} ${i18nText}` : content}
    </div>
  );
};
