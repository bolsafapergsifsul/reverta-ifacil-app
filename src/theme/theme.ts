import {createTheme} from '@shopify/restyle';
import {BoxProps} from '../components/Box/Box';

export const palette = {
  // Brand greens
  green500: '#22C55E',
  greenSoft: '#DCFCE7',

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F4F4F5',
  gray100: '#E4E4E7',
  gray500: '#71717A',
  gray600: '#A1A1AA',
  gray900: '#18181B',

  // Status & accents
  amber: '#F59E0B',
  red: '#D32F2F',
  teal: '#14B8A6',
  brown: '#8D6E63',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.green500,
    background: palette.white,
    backgroundSmooth: palette.greenSoft,
    textPrimary: palette.gray900,
    textSecondary: palette.gray500,
    success: palette.green500,
    warning: palette.amber,
    error: palette.red,
    info: palette.teal,
    // Aliases used in existing code
    greenPrimary: palette.green500,
    greenPrimaryLight: palette.greenSoft,
    gray1: palette.gray50,
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
