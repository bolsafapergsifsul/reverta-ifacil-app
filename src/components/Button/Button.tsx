import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';
import {buttonPresets} from './buttonPresets';
import {ThemeColors} from '../../theme/theme';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  preset?: ButtonPreset;
  textColor?: ThemeColors;
}

export function Button({
  title,
  loading,
  disabled,
  preset = 'primary',
  textColor,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  const resolvedTextColor = textColor ?? buttonPreset.content.color;

  return (
    <TouchableOpacityBox
      paddingHorizontal="s14"
      disabled={disabled || loading}
      alignSelf="stretch"
      height={52}
      alignItems="center"
      justifyContent="center"
      borderRadius="s10"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content.color} />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          textAlign="center"
          color={resolvedTextColor}
          {...buttonPreset.content.textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
