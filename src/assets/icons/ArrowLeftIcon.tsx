import Svg, {Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

// color: #319E42
export function ArrowLeftIcon({size = 6, color = 'green'}: IconBase) {
  return (
    <Svg width={size} height="15" viewBox="0 0 8 15" fill="none">
      <Path
        d="M7 1L1 7.06697"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M7 13.1978L1 7.13078"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
