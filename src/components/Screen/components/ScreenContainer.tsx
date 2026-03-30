import React from 'react';
import {ScrollView, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
  bottomInset?: number;
}

export function ScrollViewContainer({children, backgroundColor, bottomInset = 0}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}
      contentContainerStyle={{flexGrow: 1, paddingBottom: Math.max(bottomInset, 20)}}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor, bottomInset = 0}: Props) {
  return <View style={{backgroundColor, flex: 1}}>{children}</View>;
}
