export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}
