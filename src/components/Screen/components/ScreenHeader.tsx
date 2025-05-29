import React from 'react';
import {ScreenProps} from '../Screen';
import {Box, BoxProps} from '../../Box/Box';
import {BackButton} from '../../BackButton/BackButton';

type Props = Pick<ScreenProps, 'HeaderComponent' | 'canGoBack'> & BoxProps;

export function ScreenHeader({canGoBack, HeaderComponent, ...boxProps}: Props) {
  if (!canGoBack && !HeaderComponent) {
    return null;
  }

  return (
    <Box flexDirection="row" alignItems="center" {...boxProps}>
      {HeaderComponent}
      {canGoBack && <BackButton />}
    </Box>
  );
}
