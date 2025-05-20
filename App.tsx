import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {Text, View} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text style={{color: theme.colors.red}}>teste</Text>
      </View>
    </ThemeProvider>
  );
}

export default App;
