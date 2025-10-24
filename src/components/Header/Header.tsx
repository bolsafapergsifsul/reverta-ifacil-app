import React from 'react';
import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {ProfileAvatar} from '../ProfileAvatar/ProfileAvatar';

interface Props {
  userImageUrl?: string;
  userId?: number;
}

export function Header({userImageUrl, userId}: Props) {
  return (
    <Box
      backgroundColor="white"
      flex={1}
      paddingHorizontal="s31"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingTop="s13"
      paddingBottom="s19">
      <Icon name="logoHome" />
      <ProfileAvatar imageUrl={userImageUrl} userId={userId} />
    </Box>
  );
}
