'use client';

import { ReactElement } from 'react';

import ReduxProvider from 'stores';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default ProviderWrapper;
