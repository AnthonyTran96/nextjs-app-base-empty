import { AlertProps, SnackbarOrigin } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'stores/types';

export interface SnackbarProps {
  action: boolean;
  open: boolean;
  message: string;
  anchorOrigin: SnackbarOrigin;
  variant: string;
  alert: AlertProps;
  transition: string;
  close: boolean;
  actionButton: boolean;
  dense: boolean;
  maxStack: number;
  iconVariant: string;
}

export const initialSnackbar: SnackbarProps = {
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
};

const snackbarSlice = createSlice({
  name: SLICE_NAME.SNACKBAR,
  initialState: initialSnackbar,
  reducers: {
    reset: () => initialSnackbar,
    openSnackbar: (state, { payload }: PayloadAction<SnackbarProps>) => {
      const { action, open, message, anchorOrigin, variant, alert, transition, close, actionButton } = payload;
      Object.assign(state, {
        action: action || initialSnackbar.action,
        open: open || initialSnackbar.open,
        message: message || initialSnackbar.message,
        anchorOrigin: anchorOrigin || initialSnackbar.anchorOrigin,
        variant: variant || initialSnackbar.variant,
        alert: {
          color: alert?.color || initialSnackbar.alert.color,
          variant: alert?.variant || initialSnackbar.alert.variant
        },
        transition: transition || initialSnackbar.transition,
        close: close || initialSnackbar.close,
        actionButton: actionButton || initialSnackbar.actionButton
      });
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
    handlerIncrease: (state, { payload }: PayloadAction<number>) => {
      state.maxStack = payload;
    },
    handlerDense: (state, { payload }: PayloadAction<boolean>) => {
      state.dense = payload;
    },
    handlerIconVariants: (state, { payload }: PayloadAction<string>) => {
      state.iconVariant = payload;
    }
  }
});

export const snackbarActions = {
  ...snackbarSlice.actions
};

export const snackbarReducer = snackbarSlice.reducer;
