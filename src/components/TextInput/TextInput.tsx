import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppTheme';
import {$shadowProps, palette} from '../../theme/theme';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
  containerProps?: BoxProps;
}

export function TextInput({
  errorMessage,
  RightComponent,
  LeftComponent,
  boxProps,
  containerProps,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();
  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's8',
    paddingHorizontal: 's18',
    paddingVertical: 's14',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box flexGrow={1} flexShrink={1} {...boxProps}>
      <Pressable onPress={focusInput} {...$shadowProps}>
        <Box
          {...$textInputContainer}
          {...containerProps}
          backgroundColor="white">
          {LeftComponent && (
            <Box justifyContent="center" mr="s12">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray3}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s12">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text color="error" preset="paragraphSmall" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  color: palette.black1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphSmall,
};
