import { ThemeMode, useTheme } from '../../context/ThemeContext';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  const switchTheme = () => {
    if (theme === ThemeMode.Light) {
      setTheme(ThemeMode.Dark);
      localStorage.setItem('isDark', ThemeMode.Dark.toString());
    } else {
      setTheme(ThemeMode.Light);
      localStorage.setItem('isDark', ThemeMode.Light.toString());
    }
  };

  return <button onClick={switchTheme}>Switch {theme}</button>;
}
