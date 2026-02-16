'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';
import { DialogView } from 'components/dialog';
import { ToastView } from 'components/toast';
import { ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';

import ReduxProvider from 'stores';
import i18n from 'utils/i18n/i18n';
import { ThemeProvider } from 'utils/theme';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                  fontFamily: 'inherit'
                }
              }}
            >
              {children}
              <ToastView />
              <DialogView />
            </ConfigProvider>
          </AntdRegistry>
        </I18nextProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default ProviderWrapper;
