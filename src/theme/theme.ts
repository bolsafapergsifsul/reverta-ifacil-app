import {createTheme} from '@shopify/restyle';
import {BoxProps} from '../components/Box/Box';

export const palette = {
  green700: '#2E7D32',
  green600: '#388E3C',
  green100: "#E8F5E9",
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F5F7F6',
  gray100: '#E5E7EB',
  gray500: '#6B7280',
  gray900: '#1F2937',
  orange: '#F9A825',
  red: '#D32F2F',
  blue: '#0288D1',
  brown: '#8D6E63'
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.green700,
    background: palette.gray50,
    backgroundSmooth: palette.green100,
    textPrimary: palette.gray900,
    textSecondary: palette.gray500,
    success: palette.green700,
    warning: palette.orange,
    error: palette.red,
    info: palette.blue
  },
  spacing: {
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s13: 13,
    s14: 14,
    s16: 16,
    s18: 18,
    s19: 19,
    s20: 20,
    s24: 24,
    s26: 26,
    s29: 29,
    s30: 30,
    s31: 31,
    s34: 34,
    s36: 36,
    s42: 42,
    s46: 46,
    s60: 60,
    s68: 68,
    s78: 78,
    s80: 80,
    s93: 93,
    s95: 95,
    s123: 123,
    s238: 238,
    s300: 300,
    s371: 371,
    s377: 377,
  },
  borderRadii: {
    s8: 8,
    s10: 10,
    s13: 13,
    s60: 60,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: BoxProps = {
  elevation: 10,
  shadowColor: 'black',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: {width: 0, height: -3},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
