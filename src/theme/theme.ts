import {createTheme} from '@shopify/restyle';
import {ViewStyle} from 'react-native/types';

export const palette = {
  greenPrimaryLight: '#9EF091',
  greenPrimary: '#319E42',
  black1: '#000000',
  gray1: '#323232',
  gray2: '#1E232C',
  gray3: '#ADADAD',
  white: '#F1F1F1',
  red: '#FE3D3D',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.gray1,

    backgroud: palette.greenPrimaryLight,

    error: palette.red,
  },
  spacing: {
    s2: 2,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s24: 24,
    s26: 26,
    s30: 30,
    s31: 31,
    s34: 34,
    s42: 42,
    s46: 46,
    s68: 68,
    s78: 78,
    s80: 80,
    s93: 93,
    s95: 95,
    s123: 123,
    s300: 300,
    s371: 371,
  },
  borderRadii: {
    s8: 8,
    s10: 10,
    s13: 13,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 5,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  shadowOffset: {width: 0, height: -2},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
