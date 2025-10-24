import React from 'react';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScreenHeader} from './components/ScreenHeader';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrolllable?: boolean;
  noPaddingHorizontal?: boolean;
  paddingHorizontalHeader?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrolllable = false,
  noPaddingHorizontal = false,
  paddingHorizontalHeader = false,
  style,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const Container = scrolllable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors.white}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.backgroud}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's31'}
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScreenHeader
            paddingHorizontal={!paddingHorizontalHeader ? undefined : 's31'}
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
