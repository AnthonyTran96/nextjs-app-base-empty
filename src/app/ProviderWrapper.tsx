'use client';

import { ReactElement } from 'react';

// NEXT

// PROJECT IMPORT
import Locales from 'components/locales';
import RTLLayout from 'components/rtl-layout';
import ScrollTop from 'components/scroll/ScrollTop';
import { ConfigProvider } from 'config/app/ConfigContext';
import ThemeCustomization from 'themes';

import Snackbar from 'components/@extended/snackbar';
import Notistack from 'components/@third-party/notistack';
import ReduxProvider from 'stores';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <ReduxProvider>
      <ConfigProvider>
        <ThemeCustomization>
          <RTLLayout>
            <Locales>
              <ScrollTop>
                <Notistack>
                  <Snackbar />
                  {children}
                </Notistack>
              </ScrollTop>
            </Locales>
          </RTLLayout>
        </ThemeCustomization>
      </ConfigProvider>
    </ReduxProvider>
  );
};

export default ProviderWrapper;
