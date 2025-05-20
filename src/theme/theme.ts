import {createTheme} from '@shopify/restyle';

const palette = {
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
    s10: 10,
  },
  borderRadii: {
    s8: 8,
    s10: 10,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
