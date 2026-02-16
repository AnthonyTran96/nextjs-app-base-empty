'use client';
import { useMemo } from 'react';

import { IconSvgs } from '../../../public/assets/svg';

export interface IconSvgLocalProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  onClick?: () => void;
  className?: string;
  name: IconSvgTypes;
}

export type IconSvgTypes = keyof typeof IconSvgs;

export const IconSvgLocal = (props: IconSvgLocalProps) => {
  const { name, className, fill, ...rest } = props;
  const Icon = useMemo(() => {
    return IconSvgs[name];
  }, [name]);
  // render
  return <Icon fill={fill || ''} className={className} onClick={props.onClick} {...rest} />;
};
