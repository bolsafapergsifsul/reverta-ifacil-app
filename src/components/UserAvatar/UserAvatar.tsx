import React from 'react';
import {Box} from '../Box/Box';
import {Image} from 'react-native';
import {Text} from '../Text/Text';

export interface UserAvatarProps {
  url: string;
  size?: number;
  onPress?: () => void;
}

export function UserAVatar({url, size = 120, onPress}: UserAvatarProps) {
  const placeholder =
    'https://res.cloudinary.com/demo/image/upload/v1692142346/placeholder_user.png';
  return (
    <Box flexDirection="row" alignItems="center" gap="s10">
      <Box>
        <Image
          source={{uri: url || placeholder}}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: '#E0E0E0',
          }}
        />
      </Box>
      <Text onPress={onPress} preset="paragraphMedium" semiBold>
        Editar foto
      </Text>
    </Box>
  );
}
