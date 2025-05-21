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
    // TODO: adicionar variação disabled quando a designer definir o estilo
    // disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: {
        color: 'white',
      },
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 3,
        borderColor: 'primary',
      },
      content: {
        color: 'primary',
      },
    },
  },
};
