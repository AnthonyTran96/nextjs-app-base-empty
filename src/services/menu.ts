// Project-imports

// types
// import { MenuProps } from 'types/menu';

export const endpoints = {
  key: 'api/menu',
  master: 'master',
  dashboard: '/dashboard' // server URL
};

export function useGetMenuMaster() {
  return {
    menuMaster: {
      openedItem: 'sample-page',
      openedComponent: 'buttons',
      openedHorizontalItem: null,
      isDashboardDrawerOpened: true,
      isComponentDrawerOpened: true
    },
    menuMasterLoading: false
  };
}

export function handlerComponentDrawer(isComponentDrawerOpened: boolean) {}

export function handlerActiveComponent(openedComponent: string) {}

export function handlerDrawerOpen(isDashboardDrawerOpened: boolean) {}

export function handlerHorizontalActiveItem(openedHorizontalItem: string | null) {}

export function handlerActiveItem(openedItem: string) {}
