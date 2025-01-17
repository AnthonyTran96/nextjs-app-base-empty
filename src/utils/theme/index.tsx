import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContextType, ThemeMode } from './types';

const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeMode.LIGHT,
  setTheme: () => {}
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(ThemeMode.LIGHT);

  useEffect(() => {
    const setDefault = () => {
      let prefersDark = false;
      if (typeof window !== 'undefined') {
        prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      setTheme(prefersDark ? ThemeMode.DARK : ThemeMode.LIGHT);
      document.documentElement.classList.toggle('dark', prefersDark);
    };

    if (typeof localStorage === 'undefined') {
      setDefault();
      return;
    }

    const storedTheme = localStorage.getItem('theme') as ThemeMode;

    if (!storedTheme || !Object.values(ThemeMode).includes(storedTheme)) {
      setDefault();
      return;
    }

    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === ThemeMode.DARK);
  }, []);

  const store = useMemo(
    () => ({
      theme,
      setTheme: (theme: ThemeMode) => {
        setTheme(theme);
        document.documentElement.classList.toggle('dark', theme === ThemeMode.DARK);
        localStorage.setItem('theme', theme);
      }
    }),
    [theme]
  );

  return <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
