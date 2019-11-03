import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

interface ITheme {
  colors: {
    blue: string;
    green: string;
    transprent: string;
    backgroundWhite: string;
    black: string;
    white: string;
    firstGray: string;
    seconfGrety: string;
    thisdGrey: string;
    orange: string;
    red: string;
  };
  borderRadius: string;
  border: {
    blue: string;
    blueDashed: string;
  };
}

const theme: ITheme = {
  colors: {
    blue: '#0d5fe4',
    green: `#01CDAB`,
    transprent: '#00000000',
    backgroundWhite: '#FFFFFF',
    black: '#05142D',
    white: '#FFFFFF',
    firstGray: '#C2CDDF',
    seconfGrety: '#939BA9',
    thisdGrey: '#4A515E',
    orange: '#FF9518',
    red: '#ea1414',
  },
  borderRadius: '50px',
  border: {
    blue: '1px solid #0d5fe4',
    blueDashed: '1px dashed #0d5fe4',
  },
};

const ThemeWrapper: FC<{ children: JSX.Element }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
