import React from 'react';
import {Box} from '../Box/Box';
import {BarDetail} from '../BarDetail/BarDetail';
import {Text} from '../Text/Text';
import {Icon} from '../Icon/Icon';

export interface SocialAuthButtonsProps {
  title: string;
}

export function SocialAuthButtons({title}: SocialAuthButtonsProps) {
  return (
    <Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mt="s42">
        <BarDetail />
        <Text preset="paragraphSmall" marginHorizontal="s2" medium>
          {title}
        </Text>
        <BarDetail />
      </Box>
      <Box
        flexDirection="row"
        gap="s8"
        justifyContent="center"
        alignItems="center">
        <Box
          flex={1}
          backgroundColor="white"
          height={56}
          borderRadius="s8"
          alignItems="center"
          justifyContent="center"
          mt="s24">
          <Icon name="facebook" />
        </Box>
        <Box
          flex={1}
          backgroundColor="white"
          height={56}
          borderRadius="s8"
          alignItems="center"
          justifyContent="center"
          mt="s24">
          <Icon name="google" />
        </Box>
        <Box
          flex={1}
          backgroundColor="white"
          height={56}
          borderRadius="s8"
          alignItems="center"
          justifyContent="center"
          mt="s24">
          <Icon name="apple" />
        </Box>
      </Box>
    </Box>
  );
}
