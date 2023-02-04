import { useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeMode, useTheme } from '../../context/ThemeContext';
import RailLink from './RailLink';

const THEME_LOCALSTORAGE_KEY = 'theme';

export default function RailThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  const switchTheme = () => {
    if (theme === ThemeMode.Light) {
      setTheme(ThemeMode.Dark);
      localStorage.setItem(THEME_LOCALSTORAGE_KEY, 'dark');
    } else {
      setTheme(ThemeMode.Light);
      localStorage.setItem(THEME_LOCALSTORAGE_KEY, 'light');
    }
  };

  useEffect(() => {
    const lskey = localStorage.getItem(THEME_LOCALSTORAGE_KEY);
    if (lskey === 'dark') {
      setTheme(ThemeMode.Dark);
    }
  });

  return (
    <RailLink onClick={switchTheme} title="Switch theme">
      {theme === ThemeMode.Dark ? <FiSun /> : <FiMoon />}
    </RailLink>
  );
}
