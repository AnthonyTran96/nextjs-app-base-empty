'use client';
import { useMemo } from 'react';

import { IconSvgs } from '../../../public/assets/svg';

export interface IconSvgLocalProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  onClick?: () => void;
  classNames?: string;
  name: IconSvgTypes;
}

export type IconSvgTypes = keyof typeof IconSvgs;

export const IconSvgLocal = (props: IconSvgLocalProps) => {
  const { name, classNames, fill, ...rest } = props;
  const Icon = useMemo(() => {
    return IconSvgs[name];
  }, [name]);
  // render
  return <Icon fill={fill || ''} className={classNames} onClick={props.onClick} {...rest} />;
};
