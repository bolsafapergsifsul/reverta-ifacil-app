import {createText} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {TextStyle} from 'react-native';

const RNText = createText<Theme>();
type RNTextProps = React.ComponentProps<typeof RNText>;

export interface TextProps extends RNTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
}

export function Text({
  children,
  preset = 'paragraphSmall',
  bold,
  semiBold,
  medium,
  style,
  ...rnTextProps
}: TextProps) {
  const fontFamily = getFontFamily(bold, semiBold, medium);
  return (
    <RNText
      color="primaryContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...rnTextProps}>
      {children}
    </RNText>
  );
}

function getFontFamily(bold?: boolean, semiBold?: boolean, medium?: boolean) {
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case semiBold:
      return $fontFamily.semiBold;
    case medium:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {
    fontSize: 37,
  },
  headingMedium: {
    fontSize: 24,
  },
  headingSmall: {
    fontSize: 20,
  },
  paragraphLarge: {
    fontSize: 18,
  },
  paragraphMedium: {
    fontSize: 16,
  },
  paragraphSmall: {
    fontSize: 14,
  },
};

export const $fontFamily = {
  bold: 'Montserrat-Bold',
  semiBold: 'Montserrat-SemiBold',
  medium: 'Montserrat-Medium',
  regular: 'Montserrat-Regular',
};
