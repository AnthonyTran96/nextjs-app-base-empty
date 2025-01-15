'use client';
import { notification } from 'antd';
import { IconSvgLocal } from 'components/icon-vec-local';
import { createRef, forwardRef, useImperativeHandle } from 'react';
import { ToastProps, TYPE_TOAST } from './type';

function handleToastContent(props: ToastProps) {
  return (
    <div className={`mr-28 pr-4 font-semibold ${props.wrapClassName || ''}`}>{props.content}</div>
  );
}

function handleToastIcon(props: ToastProps) {
  if (props.icon) {
    return (
      <IconSvgLocal
        name={props.icon.name}
        fill={props.icon.fill}
        height={props.icon.height}
        width={props.icon.width}
      />
    );
  }

  switch (props.type) {
    case TYPE_TOAST.INFO:
      return (
        <IconSvgLocal name="ICON_INFO_SOLID" fill="rgb(var(--link-600))" height={24} width={24} />
      );
    case TYPE_TOAST.SUCCESS:
      return (
        <IconSvgLocal name="ICON_CHECK_GREEN" fill="rgb(var(--color-50))" height={24} width={24} />
      );
    case TYPE_TOAST.WARNING:
      return (
        <IconSvgLocal name="ICON_WARNING" fill="rgb(var(--pending-600))" height={24} width={24} />
      );
    case TYPE_TOAST.ERROR:
      return <IconSvgLocal name="ICON_ERROR" fill="rgb(var(--error-600))" height={24} width={24} />;
    case TYPE_TOAST.ERROR2:
      return (
        <IconSvgLocal
          name="ICON_CLOSE_TAKE_NOTE"
          fill="rgb(var(--error-600))"
          height={24}
          width={24}
        />
      );
    case TYPE_TOAST.DARK:
      return (
        <IconSvgLocal name="ICON_INFO_SOLID" fill="rgb(var(--color-50))" height={24} width={24} />
      );
    default:
      return null;
  }
}

// eslint-disable-next-line react/display-name
const Component = forwardRef((_: any, ref) => {
  const [api, contextHolder] = notification.useNotification();

  useImperativeHandle(ref, () => ({
    show: (props: ToastProps) => {
      api.open({
        message: handleToastContent(props),
        duration: props.timeShow || 3,
        icon: handleToastIcon(props),
        placement: props.placement || 'topRight',
        className: props.type === TYPE_TOAST.DARK ? 'dark-toast' : '',
        style: props.styleToast
      });
    }
  }));

  return <div>{contextHolder}</div>;
});

type Toast = {
  show: (data: { type?: TYPE_TOAST; content: string }) => void;
};
export const ToastRef = createRef<Toast>();

export const ToastView = () => <Component ref={ToastRef} />;

export const showToast = (props: ToastProps) => {
  ToastRef.current?.show(props);
};
