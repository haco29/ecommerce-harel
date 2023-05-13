import { DefaultTheme } from 'styled-components';
import { colors } from './colors';

export const theme: DefaultTheme = {
  colors,
  borderRadius: '4px',
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  typography: {
    fontFamily: "'Roboto', sans-serif;",
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
};
