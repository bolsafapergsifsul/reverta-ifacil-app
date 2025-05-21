import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';
import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s14"
      width={170}
      height={47}
      alignItems="center"
      justifyContent="center"
      borderRadius="s10"
      {...buttonPreset.default.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.default.content.color} />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          color={buttonPreset.default.content.color}
          {...buttonPreset.default.content.textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
