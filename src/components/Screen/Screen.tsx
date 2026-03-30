import React from 'react';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScreenHeader} from './components/ScreenHeader';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import { ThemeColors } from '../../theme/theme';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrolllable?: boolean;
  noPaddingHorizontal?: boolean;
  paddingHorizontalHeader?: boolean;
  noPaddingBottom?: boolean;
  backgroundColor?: ThemeColors;
}

export function Screen({
  children,
  canGoBack = false,
  scrolllable = false,
  noPaddingHorizontal = false,
  paddingHorizontalHeader = false,
  noPaddingBottom = false,
  style,
  HeaderComponent,
  backgroundColor = "white",
  ...boxProps
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const Container = scrolllable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors[backgroundColor]}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <Container backgroundColor={colors[backgroundColor]} bottomInset={bottom}>
        <Box
          flex={1}
          paddingHorizontal={noPaddingHorizontal ? undefined : 's31'}
          style={[
            {paddingTop: top, paddingBottom: noPaddingBottom ? 0 : bottom},
            style,
          ]}
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
