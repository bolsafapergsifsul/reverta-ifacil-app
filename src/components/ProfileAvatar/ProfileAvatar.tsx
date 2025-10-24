import React from 'react';
import {Image, Pressable} from 'react-native';
import {Icon} from '../Icon/Icon';

export interface ProfileAVatarProps {
  imageUrl?: string;
  size?: number;
  borderRadius?: number;
  userId?: number;
}

export function ProfileAvatar({
  imageUrl,
  size = 48,
  borderRadius = 24,
  userId,
}: ProfileAVatarProps) {
  // TODO: implementar navegação para o perfil do usuário ao clicar no avatar

  return (
    <Pressable>
      {imageUrl ? (
        <Image
          source={{uri: imageUrl}}
          style={{
            width: size,
            height: size,
            borderRadius,
          }}
        />
      ) : (
        <Icon size={size} name="profileFill" color="gray3" />
      )}
    </Pressable>
  );
}
