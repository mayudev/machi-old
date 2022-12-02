import { createContext, useContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { themeDark, themeLight } from '../style/Themes';

export enum ThemeMode {
  Light,
  Dark,
}

export const ThemeContext = createContext<
  [ThemeMode, (theme: ThemeMode) => void]
>([ThemeMode.Light, () => {}]);

export const useTheme = () => useContext(ThemeContext);

type ThemeMapping = {
  [key in ThemeMode]: DefaultTheme;
};

export const themeMappings: ThemeMapping = [themeLight, themeDark];
