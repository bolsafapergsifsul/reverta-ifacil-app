import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {useAuthSignOut} from '../../../domain/Auth/useCases/useAuthSignOut';

export function HomeScreen() {
  const {signOut} = useAuthSignOut();

  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button title="deslogar" onPress={signOut} />
    </Screen>
  );
}
