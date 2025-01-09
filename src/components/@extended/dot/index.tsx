'use client';

// MATERIAL - UI
import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

// PROJECT IMPORTS
import { ColorProps } from 'types/extended';
import getColors from 'utils/getColors';

// ==============================|| DOT - EXTENDED ||============================== //

interface DotProps {
  color?: ColorProps;
  size?: number;
  variant?: string;
  sx?: BoxProps['sx'];
  componentDiv?: boolean;
}

const Dot = ({ color, size, variant, sx = {}, componentDiv }: DotProps) => {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      component={componentDiv ? 'div' : 'span'}
      sx={{
        width: size || 8,
        height: size || 8,
        borderRadius: '50%',
        bgcolor: variant === 'outlined' ? '' : main,
        ...(variant === 'outlined' && {
          border: `1px solid ${main}`
        }),
        ...sx
      }}
    />
  );
};

export default Dot;
