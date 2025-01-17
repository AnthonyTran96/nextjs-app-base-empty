import { useContext } from 'react';
import { ThemeContext } from 'utils/theme';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
