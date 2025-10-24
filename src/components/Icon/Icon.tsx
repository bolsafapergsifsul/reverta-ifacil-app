import React from 'react';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {StickerCheckIcon} from '../../assets/icons/StickerCheckIcon';
import {LogoIcon} from '../../Brand/LogoIcon';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';
import {Pressable} from 'react-native';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {GoogleIcon} from '../../assets/icons/GoogleIcon';
import {AppleIcon} from '../../assets/icons/AppleIcon';
import {FacebookIcon} from '../../assets/icons/FacebookIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {ErrorRoundIcon} from '../../assets/icons/ErrorRoundIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {LogoHomeIcon} from '../../assets/icons/LogoHome';
import {BuscaIcon} from '../../assets/icons/BuscaIcon';
import {CalendarIcon} from '../../assets/icons/CalendarIcon';
import {ColetaIcon} from '../../assets/icons/ColetaIcon';
import {MapaIcon} from '../../assets/icons/MapaIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  fillColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'primary',
  fillColor,
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor: fillColor ? colors[fillColor] : undefined,
  };

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  apple: AppleIcon,
  arrowLeft: ArrowLeftIcon,
  busca: BuscaIcon,
  calendar: CalendarIcon,
  coleta: ColetaIcon,
  checkRound: CheckRoundIcon,
  errorRound: ErrorRoundIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  facebook: FacebookIcon,
  google: GoogleIcon,
  home: HomeIcon,
  logo: LogoIcon,
  logoHome: LogoHomeIcon,
  mapa: MapaIcon,
  profileFill: ProfileFillIcon,
  stickerCheck: StickerCheckIcon,
};

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
