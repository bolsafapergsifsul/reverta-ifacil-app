import {IconProps} from '../components/Icon/Icon';
import {AppTabBottomTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'home',
      unfocused: 'home',
    },
  },
  MapaScreen: {
    label: 'Mapa',
    icon: {
      focused: 'mapa',
      unfocused: 'mapa',
    },
  },
  ColetasScreen: {
    label: 'Coletas',
    icon: {
      focused: 'coleta',
      unfocused: 'coleta',
    },
  },
  SettingsScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
