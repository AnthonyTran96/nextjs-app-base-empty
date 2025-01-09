// types
import { SnackbarProps } from 'model/snackbar';

export const endpoints = {
  key: 'snackbar'
};

export function useGetSnackbar() {
  return {
    snackbar: {
      action: false,
      open: false,
      message: 'Note archived',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      variant: 'default',
      alert: {
        color: 'primary',
        variant: 'filled'
      },
      transition: 'Fade',
      close: false,
      actionButton: false,
      maxStack: 3,
      dense: false,
      iconVariant: 'usedefault'
    }
  } as any;
}

export function openSnackbar(snackbar: SnackbarProps) {}

export function closeSnackbar() {}

export function handlerIncrease(maxStack: number) {}

export function handlerDense(dense: boolean) {}

export function handlerIconVariants(iconVariant: string) {}
