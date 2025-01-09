'use client';

import { lazy, ReactNode } from 'react';

// NEXT
import { usePathname } from 'next/navigation';

// MATERIAL - UI
const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

// PROJECT IMPORTS
import Loader from 'components/loader';
import { useGetMenuMaster } from 'services/menu';

// ==============================|| LAYOUTS - STRUCTURE ||============================== //

interface Props {
  children: ReactNode;
}

const SimpleLayout = ({ children }: Props) => {
  const { menuMasterLoading } = useGetMenuMaster();

  const pathname = usePathname();
  const layout: string = pathname === 'landing' || '/' ? 'landing' : 'simple';

  if (menuMasterLoading) return <Loader />;

  return (
    <>
      <Header />
      {children}
      <FooterBlock isFull={layout === 'landing'} />
    </>
  );
};

export default SimpleLayout;
