import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {} from 'react-native/Libraries/NewAppScreen';
import {theme} from './src/theme/theme';

import {Router} from './src/routes/Routes';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
