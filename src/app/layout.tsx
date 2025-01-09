import type { Metadata } from 'next';

import './globals.css';

// PROJECT IMPORTS
import ProviderWrapper from './ProviderWrapper';

export const metadata: Metadata = {
  title: 'Able Pro Material UI React Dashboard Template',
  description: 'Able Pro Material UI React Dashboard Template'
};

export default function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <html lang="vi">
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
