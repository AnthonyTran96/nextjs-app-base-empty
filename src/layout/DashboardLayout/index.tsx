'use client';

import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// PROJECT IMPORTS
import { dispatch } from '@redux-common';
import { selectMenuMasterLoading } from '@redux-selector/menu';
import { menuActions } from '@redux-slice';
import Breadcrumbs from 'components/@extended/breadcrumbs';
import Loader from 'components/loader';
import { DRAWER_WIDTH } from 'config/app';
import useConfig from 'hooks/useConfig';
import Drawer from './Drawer';
import HorizontalBar from './Drawer/HorizontalBar';
import Footer from './Footer';
import Header from './Header';

// TYPES
import { MenuOrientation } from 'types/config';

// ==============================|| MAIN LAYOUT ||============================== //

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  // const { menuMasterLoading } = useGetMenuMaster();
  const menuMasterLoading = useSelector(selectMenuMasterLoading);
  const downXL = useMediaQuery(theme.breakpoints.down('xl'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { container, miniDrawer, menuOrientation } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // set media wise responsive drawer
  useEffect(() => {
    if (!miniDrawer) {
      // handlerDrawerOpen(!downXL);
      dispatch(menuActions.handlerDrawerOpen(!downXL));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      {!isHorizontal ? <Drawer /> : <HorizontalBar />}

      <Box component="main" sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, flexGrow: 1, p: { xs: 1, sm: 3 } }}>
        <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit', mb: isHorizontal ? 2 : 'inherit' }} />
        <Container
          maxWidth={container ? 'xl' : false}
          sx={{
            xs: 0,
            ...(container && { px: { xs: 0, sm: 2 } }),
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Breadcrumbs />
          {children}
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
