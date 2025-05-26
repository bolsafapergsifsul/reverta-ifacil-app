import React from 'react';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {StickerCheckIcon} from '../../assets/icons/StickerCheckIcon';
import {LogoIcon} from '../../Brand/LogoIcon';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';
import {Pressable} from 'react-native';

export interface IconBase {
  size?: number;
  color?: string;
  //fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  //fillColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({name, color = 'primary', size, onPress}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
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
  arrowLeft: ArrowLeftIcon,
  Logo: LogoIcon,
  StickerCheck: StickerCheckIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
