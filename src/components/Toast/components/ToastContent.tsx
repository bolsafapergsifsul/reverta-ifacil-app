import React from 'react';
import {Dimensions} from 'react-native';
import {Toast, ToastType} from '../../../services/toast/toastTypes';
import {BoxProps, Box} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {$shadowProps} from '../../../theme/theme';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
  hideToast: () => void;
}

export function ToastContent({toast, hideToast}: Props) {
  const type: ToastType = toast.type || 'success';

  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
      {toast.action && (
        <Text
          ml="s8"
          color="black1"
          preset="paragraphMedium"
          bold
          onPress={() => {
            toast.action?.onPress();
            hideToast();
          }}>
          {toast.action.title}
        </Text>
      )}
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'greenPrimary',
    name: 'checkRound',
  },
  error: {
    color: 'red',
    name: 'errorRound',
  },
};

const $boxStyle: BoxProps = {
  backgroundColor: 'white',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's13',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
