'use client';
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconSvgLocal, IconSvgTypes } from 'components/icon-vec-local';

export interface IdPropButton {
  className?: string;
  customContent?: React.ReactNode;
  disabled?: boolean;
  heightIcon?: number; // css inline để đè lên css mặc định
  htmlType?: HTMLButtonElement['type']; // có thể bổ sung class ngoài
  leftIcon?: IconSvgTypes;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  rightIcon?: IconSvgTypes;
  fontSize?: number;
  size?: 44 | 32;
  styles?: React.CSSProperties;
  t18n?: string;
  t18nOptions?: any;
  type?: 'primary' | 'secondary' | 'ghost' | 'whiteGhost';
  widthIcon?: number; // cái này để custom lại content của button
}

const ButtonBase = (props: IdPropButton) => {
  // set props mặc định khi không truyền
  const {
    type = 'secondary',
    htmlType = 'button',
    disabled = false,
    onClick,
    styles = {},
    className = '',
    size = 44,
    t18n,
    t18nOptions,
    fontSize,
    leftIcon,
    rightIcon,
    heightIcon = 20,
    widthIcon = 20,
    customContent
  } = props;
  const [t] = useTranslation();
  const i18nText = t18n && (t(t18n, t18nOptions) as string);
  const content = i18nText || customContent;
  const [hoveredItem, setHoveredItem] = useState('');

  const updateImageState = () => {
    if (disabled) {
      return 'rgb(var(--color-600)';
    }
    return hoveredItem && (type === 'secondary' || type === 'whiteGhost')
      ? 'rgb(var(--primary-700)'
      : '';
  };

  let contentClass = '';

  if (size === 32) {
    contentClass = 'text-14 font-normal leading-20';
  } else if (size === 44) {
    contentClass = 'text-16'; // assuming 'text-15' represents 15px size
  } else {
    contentClass = 'text-16 font-semibold leading-24';
  }

  return (
    <button
      type={htmlType}
      onClick={(e) => (onClick ? onClick(e) : null)}
      style={{ height: size, fontSize, ...styles }}
      disabled={disabled}
      className={`btn_base btn_${type} ${className}`}
      onMouseEnter={() => setHoveredItem('rgb(var(--color-700)')}
      onMouseLeave={() => setHoveredItem('')}
    >
      {leftIcon && (
        <div style={{ marginRight: content ? 8 : 0 }}>
          <IconSvgLocal
            name={leftIcon}
            height={heightIcon}
            width={widthIcon}
            fill={updateImageState()}
          />
        </div>
      )}
      <span className={contentClass}>{content}</span>
      {rightIcon && (
        <div style={{ marginLeft: content ? 8 : 0 }}>
          <IconSvgLocal
            name={rightIcon}
            height={heightIcon}
            width={widthIcon}
            fill={disabled ? 'rgb(var(--color-600)' : ''}
          />
        </div>
      )}
    </button>
  );
};

export default ButtonBase;
