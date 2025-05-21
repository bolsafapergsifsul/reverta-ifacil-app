import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {View} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text preset="headingLarge">teste</Text>
        <Button title="teste" preset="outline" />
      </View>
    </ThemeProvider>
  );
}

export default App;
