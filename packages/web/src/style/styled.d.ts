import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    background2: string;
    foreground: string;
    foreground2: string;
    border: string;
    primary: string;
    primary2: string;

    railbg1: string;
    railbg2: string;
    railfg1: string;
    railfg2: string;
  }
}
