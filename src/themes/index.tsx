import { ReactNode, useMemo } from 'react';

// MATERIAL - UI
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import {
  createTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
  TypographyVariantsOptions
} from '@mui/material/styles';

// PROJECT IMPORTS
import { NextAppDirEmotionCacheProvider } from './emotionCache';
import componentsOverride from './overrides';
import Palette from './palette';
import CustomShadows from './shadows';
import Typography from './typography';

import { HEADER_HEIGHT } from 'config/app';
import useConfig from 'hooks/useConfig';
import getWindowScheme from 'utils/getWindowScheme';

// TYPES
import { ThemeMode } from 'types/config';
import { CustomShadowProps } from 'types/theme';

type ThemeCustomizationProps = {
  children: ReactNode;
};

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }: ThemeCustomizationProps) {
  const { themeDirection, mode, presetColor, fontFamily, themeContrast } = useConfig();
  let themeMode: any = mode;
  if (themeMode === ThemeMode.AUTO) {
    const autoMode = getWindowScheme();
    if (autoMode) {
      themeMode = ThemeMode.DARK;
    } else {
      themeMode = ThemeMode.LIGHT;
    }
  }

  const theme: Theme = useMemo<Theme>(
    () => Palette(themeMode, presetColor, themeContrast),
    [themeMode, presetColor, themeContrast]
  );

  const themeTypography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(
    () => Typography(themeMode, fontFamily, theme),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeMode, fontFamily]
  );
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(
    () => CustomShadows(theme),
    [theme]
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440
        }
      },
      direction: themeDirection,
      mixins: {
        toolbar: {
          minHeight: HEADER_HEIGHT,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      shape: {
        borderRadius: 8
      },
      customShadows: themeCustomShadows,
      typography: themeTypography
    }),
    [themeDirection, theme, themeTypography, themeCustomShadows]
  );

  const themes: Theme = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={themes}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </StyledEngineProvider>
  );
}
