import type { NotificationPlacement } from 'antd/es/notification/interface';
import { IconSvgLocalProps } from 'components/icon-vec-local/type';
import type React from 'react';

export enum TYPE_TOAST {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  ERROR2 = 'error2',
  DARK = 'dark'
}

export interface ToastProps {
  type?: TYPE_TOAST;
  content: string;
  wrapClassName?: string;
  timeShow?: number;
  icon?: IconSvgLocalProps;
  placement?: NotificationPlacement;
  styleToast?: React.CSSProperties;
}
