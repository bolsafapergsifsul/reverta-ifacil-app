import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {theme} from './src/theme/theme';

import {Router} from './src/routes/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {initializeStorage} from './src/services/storage/storage';
import {MMKVStorage} from './src/services/storage/implementation/MMKVStorage';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Toast} from './src/components/Toast/Toast';

initializeStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
