import React from 'react';
import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {ProfileAvatar} from '../ProfileAvatar/ProfileAvatar';
import {useAuthCredentials} from '../../services/authCredentials/useAuthCredentials';

export function Header() {
  const {authCredentials} = useAuthCredentials();
  const userImageUrl = authCredentials?.user.profilePic || '';
  return (
    <Box
      backgroundColor="white"
      paddingHorizontal="s31"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingTop="s13"
      paddingBottom="s19">
      <Icon name="logoHome" />
      <ProfileAvatar imageUrl={userImageUrl} />
    </Box>
  );
}
