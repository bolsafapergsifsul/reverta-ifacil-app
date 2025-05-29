import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {} from 'react-native/Libraries/NewAppScreen';
import {theme} from './src/theme/theme';

import {Router} from './src/routes/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
