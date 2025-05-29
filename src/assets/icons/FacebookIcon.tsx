import React from 'react';
import {IconBase} from '../../components/Icon/Icon';
import Svg, {Path} from 'react-native-svg';

export function FacebookIcon({size = 27}: IconBase) {
  return (
    <Svg width={size} height="26" viewBox="0 0 27 26" fill="none">
      <Path
        d="M15.0128 25V14.0703H18.5131L19.0334 9.79094H15.0128V7.06518C15.0128 5.83032 15.3394 4.98485 17.0219 4.98485H19.1537V1.16959C18.1164 1.05249 17.0738 0.995949 16.0306 1.00023C12.9367 1.00023 10.8125 2.98987 10.8125 6.64245V9.78294H7.33496V14.0623H10.8201V25H15.0128Z"
        fill="#4092FF"
      />
    </Svg>
  );
}
