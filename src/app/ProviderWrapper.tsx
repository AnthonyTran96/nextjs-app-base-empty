'use client';

import { ReactElement } from 'react';

// NEXT

// PROJECT IMPORT
import Locales from 'components/locales';

import { ConfigProvider } from 'config/app/ConfigContext';

import ReduxProvider from 'stores';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <ReduxProvider>
      <ConfigProvider>
        <Locales>{children}</Locales>
      </ConfigProvider>
    </ReduxProvider>
  );
};

export default ProviderWrapper;
