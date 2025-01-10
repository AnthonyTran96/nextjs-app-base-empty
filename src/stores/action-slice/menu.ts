import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'stores/types';
import { MenuProps } from 'types/menu';

export interface MenuState {
  menuMaster: MenuProps;
  menuMasterLoading: boolean;
}

const initialState: MenuState = {
  menuMaster: {
    openedItem: 'dashboard',
    openedComponent: 'buttons',
    openedHorizontalItem: null,
    isDashboardDrawerOpened: false,
    isComponentDrawerOpened: true
  },
  menuMasterLoading: false
};

const menuSlice = createSlice({
  name: SLICE_NAME.MENU,
  initialState,
  reducers: {
    reset: () => initialState,
    startLoadingMenuMaster: (state) => {
      state.menuMasterLoading = true;
    },
    endLoadingMenuMaster: (state) => {
      state.menuMasterLoading = false;
    },
    handlerComponentDrawer: (state, { payload }: PayloadAction<boolean>) => {
      state.menuMaster.isComponentDrawerOpened = payload;
    },
    handlerActiveComponent: (state, { payload }: PayloadAction<string>) => {
      state.menuMaster.openedComponent = payload;
    },
    handlerDrawerOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.menuMaster.isDashboardDrawerOpened = payload;
    },
    handlerHorizontalActiveItem: (state, { payload }: PayloadAction<string | null>) => {
      state.menuMaster.openedHorizontalItem = payload;
    },
    handlerActiveItem: (state, { payload }: PayloadAction<string>) => {
      state.menuMaster.openedItem = payload;
    }
  }
});

export const menuAction = {
  ...menuSlice.actions
};

export const menuReducer = menuSlice.reducer;
