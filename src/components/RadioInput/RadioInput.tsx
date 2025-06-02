import React from 'react';
import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

export interface RadioInputProps extends TouchableOpacityBoxProps {
  label: string;
  value?: string;
  selected?: boolean;
}

export function RadioInput({
  label,
  selected,
  onPress,
  ...touchableOpacityBoxProps
}: RadioInputProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      onPress={onPress}
      {...touchableOpacityBoxProps}>
      <Box
        width={23}
        height={23}
        borderRadius="s13"
        alignItems="center"
        justifyContent="center"
        backgroundColor={selected ? 'primary' : 'white'}>
        {selected && (
          <Box
            width={23}
            height={23}
            borderRadius="s10"
            borderColor="white"
            borderWidth={1}
            backgroundColor={selected ? 'primary' : 'white'}
          />
        )}
      </Box>
      <Text preset="paragraphMedium" marginLeft="s12" bold>
        {label}
      </Text>
    </TouchableOpacityBox>
  );
}
