'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { DialogView } from 'components/dialog';
import { ToastView } from 'components/toast';
import { ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';

import ReduxProvider from 'stores';
import i18n from 'utils/i18n/i18n';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <ReduxProvider>
      <I18nextProvider i18n={i18n}>
        <AntdRegistry>
          {children}
          <ToastView />
          <DialogView />
        </AntdRegistry>
      </I18nextProvider>
    </ReduxProvider>
  );
};

export default ProviderWrapper;
