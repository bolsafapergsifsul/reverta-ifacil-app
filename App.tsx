import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {View} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import {theme} from './src/theme/theme';

import {Icon} from './src/components/Icon/Icon';
import {TextInput} from './src/components/TextInput/TextInput';
import {PasswordInput} from './src/components/PasswordInput/PasswordInput';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={{padding: 20}}>
        <TextInput placeholder="digite seu email" />
        <PasswordInput placeholder="digite sua senha" />
      </View>
    </ThemeProvider>
  );
}

export default App;
