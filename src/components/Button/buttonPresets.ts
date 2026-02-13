import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {TextProps} from '../Text/Text';
import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {color: ThemeColors; textProps?: TextProps};
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: {
        color: "background",
      },
    },
    disabled: {
      container: {
        backgroundColor: "gray100",
      },
      content: {color: 'gray500'},
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 3,
        borderColor: "green600",
      },
      content: {
        color: "green600",
      },
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray100',
      },
      content: {color: 'gray500'},
    },
  },
};
