import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';

// MATERIAL - UI
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import { alpha, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// PROJECT IMPORTS
import IconButton from 'components/@extended/button/IconButton';
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';

import { dispatch } from '@redux-common';
import { selectMenuMaster } from '@redux-selector/menu';
import { menuAction } from '@redux-slice';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from 'config/app';
import useConfig from 'hooks/useConfig';

// ASSETS
import { HambergerMenu } from 'iconsax-react';

// TYPES
import { MenuOrientation, ThemeMode } from 'types/config';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation } = useConfig();
  // const { menuMaster } = useGetMenuMaster();
  const menuMaster = useSelector(selectMenuMaster);
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // HEADER CONTENT
  const headerContent = useMemo(() => <HeaderContent />, []);

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'secondary.200' : 'secondary.200';
  const iconBackColor = theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'secondary.100';

  // COMMON HEADER
  const mainHeader: ReactNode = (
    <Toolbar sx={{ px: { xs: 2, sm: 4.5, lg: 8 } }}>
      {!isHorizontal ? (
        <IconButton
          aria-label="open drawer"
          onClick={() =>
            // handlerDrawerOpen(!drawerOpen)
            dispatch(menuAction.handlerDrawerOpen(!drawerOpen))
          }
          edge="start"
          color="secondary"
          variant="light"
          size="large"
          sx={{ color: 'secondary.main', bgcolor: drawerOpen ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: -2 }, p: 1 }}
        >
          <HambergerMenu />
        </IconButton>
      ) : null}
      {headerContent}
    </Toolbar>
  );

  // APP-BAR PARAMS
  const appBar: AppBarProps = {
    position: 'fixed',
    elevation: 0,
    sx: {
      bgcolor: alpha(theme.palette.background.default, 0.8),
      backdropFilter: 'blur(8px)',
      zIndex: 1200,
      width: isHorizontal
        ? '100%'
        : { xs: '100%', lg: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : `calc(100% - ${MINI_DRAWER_WIDTH}px)` }
    }
  };

  return (
    <>
      {!downLG ? (
        <AppBarStyled open={drawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
