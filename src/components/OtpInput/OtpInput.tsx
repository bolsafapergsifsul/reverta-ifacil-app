import React, {useRef} from 'react';
import {TextInput as RNTextInput, TextStyle} from 'react-native';
import {Box} from '../Box/Box';
import {palette} from '../../theme/theme';
import {$fontFamily} from '../Text/Text';

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function OtpInput({value, onChange}: OtpInputProps) {
  const inputRefs = useRef<(RNTextInput | null)[]>([]);

  // Always produce exactly 4 slots — never undefined
  const digits = Array.from({length: 4}, (_, i) => value[i] ?? '');

  function handleChange(text: string, index: number) {
    const char = text.replace(/\s/g, '').slice(-1);
    const newDigits = [...digits];
    newDigits[index] = char;
    const newValue = newDigits.join('');
    onChange(newValue);
    if (char && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyPress(key: string, index: number) {
    if (key === 'Backspace') {
      if (!digits[index] && index > 0) {
        const newDigits = [...digits];
        newDigits[index - 1] = '';
        onChange(newDigits.join(''));
        inputRefs.current[index - 1]?.focus();
      }
    }
  }

  return (
    <Box flexDirection="row" gap="s16">
      {[0, 1, 2, 3].map(index => (
        <Box
          key={index}
          flex={1}
          height={64}
          borderRadius="s8"
          borderWidth={1}
          borderColor="gray100"
          backgroundColor="background"
          alignItems="center"
          justifyContent="center">
          <RNTextInput
            ref={ref => {
              inputRefs.current[index] = ref;
            }}
            value={digits[index]}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={({nativeEvent}) =>
              handleKeyPress(nativeEvent.key, index)
            }
            keyboardType="default"
            autoCapitalize="none"
            maxLength={1}
            style={$otpInputStyle}
          />
        </Box>
      ))}
    </Box>
  );
}

const $otpInputStyle: TextStyle = {
  width: '100%',
  textAlign: 'center',
  fontSize: 24,
  fontFamily: $fontFamily.bold,
  color: palette.gray900,
  padding: 0,
};
