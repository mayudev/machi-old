import { DefaultTheme } from 'styled-components';

export const themeDark: DefaultTheme = {
  background: '#25292d',
  background2: '#31363c',
  foreground: '#eeeeee',
  foreground2: '#b3b3b3',
  border: '#b0b0b0',
  primary: '#ca469d',
  primary2: '#e65fb8',
  railbg1: '',
  railbg2: '',
  railfg1: '',
  railfg2: '',
};

export const themeLight: DefaultTheme = {
  background: '#ffffff',
  background2: '#f7f7f7',
  foreground: '#131516',
  foreground2: '#131516',
  border: '#b0b0b0',
  primary: '#ca469d',
  primary2: '#e65fb8',
  railbg1: '',
  railbg2: '',
  railfg1: '',
  railfg2: '',
};

[themeDark, themeLight].forEach(theme => {
  theme.railbg1 = themeDark.background;
  theme.railbg2 = themeDark.background2;
  theme.railfg1 = themeDark.foreground;
  theme.railfg2 = themeDark.foreground2;
});
