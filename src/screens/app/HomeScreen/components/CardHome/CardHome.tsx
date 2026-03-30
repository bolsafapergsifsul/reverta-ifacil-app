import React from 'react';
import {TouchableOpacityBox} from '../../../../../components/Box/Box';
import {Box} from '../../../../../components/Box/Box';
import {Icon, IconName} from '../../../../../components/Icon/Icon';
import {Text} from '../../../../../components/Text/Text';

interface CardHomeProps {
  title: string;
  iconName: IconName;
  onPress?: () => void;
}

export function CardHome({title, iconName, onPress}: CardHomeProps) {
  return (
    <TouchableOpacityBox flex={1} onPress={onPress}>
      <Box
        flex={1}
        paddingHorizontal="s14"
        paddingTop="s12"
        paddingBottom="s8"
        borderRadius="s10"
        backgroundColor="gray1">
        <Icon name={iconName} />
        <Text preset="paragraphSmall" mt="s8" bold>
          {title}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
