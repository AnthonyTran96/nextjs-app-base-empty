'use client';

import { ReactElement } from 'react';

// NEXT

// PROJECT IMPORT
import Locales from 'components/locales';

import { ConfigProvider } from 'config/app/ConfigContext';
import ThemeCustomization from 'themes';

import { Snackbar } from '@mui/base';
import ReduxProvider from 'stores';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <ReduxProvider>
      <ConfigProvider>
        <ThemeCustomization>
          <Locales>
            <Snackbar />
            {children}
          </Locales>
        </ThemeCustomization>
      </ConfigProvider>
    </ReduxProvider>
  );
};

export default ProviderWrapper;
