import React from 'react';

import {Box, TouchableOpacityBox} from '../../../../../components/Box/Box';
import {Icon, IconName} from '../../../../../components/Icon/Icon';
import {Text} from '../../../../../components/Text/Text';

interface CardHomeProps {
  title: string;
  iconName: IconName;
  onPress?: () => void;
}

export function CardHome({title, iconName, onPress}: CardHomeProps) {
  return (
    <TouchableOpacityBox onPress={onPress}>
      <Box
        width={135}
        paddingHorizontal="s14"
        paddingTop="s12"
        paddingBottom="s8"
        borderRadius="s10"
        backgroundColor="white">
        <Icon name={iconName} />
        <Text preset="paragraphMedium" mt="s8">
          {title}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
