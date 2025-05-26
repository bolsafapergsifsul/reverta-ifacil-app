import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {View} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import {theme} from './src/theme/theme';

import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Icon name="arrowLeft" />
      </View>
    </ThemeProvider>
  );
}

export default App;
