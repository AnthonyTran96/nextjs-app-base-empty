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

const initialState: SnackbarProps = {
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
  initialState,
  reducers: {
    reset: () => initialState,
    openSnackbar: (state, { payload }: PayloadAction<SnackbarProps>) => {
      const { action, open, message, anchorOrigin, variant, alert, transition, close, actionButton } = payload;
      Object.assign(state, {
        action: action || initialState.action,
        open: open || initialState.open,
        message: message || initialState.message,
        anchorOrigin: anchorOrigin || initialState.anchorOrigin,
        variant: variant || initialState.variant,
        alert: {
          color: alert?.color || initialState.alert.color,
          variant: alert?.variant || initialState.alert.variant
        },
        transition: transition || initialState.transition,
        close: close || initialState.close,
        actionButton: actionButton || initialState.actionButton
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

export const snackbarAction = {
  ...snackbarSlice.actions
};

export const snackbarReducer = snackbarSlice.reducer;
