import React from 'react';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScreenHeader} from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrolllable?: boolean;
  noPaddingHorizontal?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrolllable = false,
  noPaddingHorizontal = false,
  style,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  //const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const Container = scrolllable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.backgroud}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's31'}
          style={[{}, style]}
          {...boxProps}>
          <ScreenHeader
            paddingHorizontal={noPaddingHorizontal ? undefined : 's31'}
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
