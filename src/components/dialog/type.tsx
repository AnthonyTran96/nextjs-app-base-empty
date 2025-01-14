import { IconSvgTypes } from 'assets/svg';
import type { ReactNode } from 'react';

export enum TYPE_MESSAGE {
  ALERT = 'alert',
  CONFIRM = 'confirm',
  TEXT_LINK = 'Textlink'
}

export enum TYPE_ACTION {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LINK = 'link'
}

// export type TypeMessage = (typeof TYPE_MESSAGE)[keyof typeof TYPE_MESSAGE];
// export type TypeAction = (typeof TYPE_ACTION)[keyof typeof TYPE_ACTION];

export interface ActionProps {
  title: ReactNode | string;
  onPress?: (index?: number) => void;
  type?: TYPE_ACTION;
  typeMessage?: TYPE_MESSAGE;
  index?: number;
  iconLeftName?: IconSvgTypes;
  iconRightName?: IconSvgTypes;
  className?: string;
  stopHide?: boolean;
}

export interface ImageProps {
  name: IconSvgTypes;
  width?: number;
  height: number;
}

export interface DialogProps {
  title?: ReactNode | string;
  content: ReactNode;
  sub?: ReactNode | string;
  image?: ImageProps;
  type?: TYPE_MESSAGE;
  actions?: ActionProps[];
  contentComponent?: ReactNode;
  disableTouchOutSide?: boolean;
  onHideOutside?: () => void;
  classNameFooter?: string;
}

interface StateType extends DialogProps {
  isShow: boolean;
}

export const stateDefault: StateType = {
  title: '',
  content: '',
  type: TYPE_MESSAGE.ALERT,
  isShow: false,
  actions: undefined,
  contentComponent: undefined,
  disableTouchOutSide: false
};
