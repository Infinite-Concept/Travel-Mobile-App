import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MySVGComponent = () => {
  return (
    <Svg width={26} height={23} viewBox="0 0 26 23" fill="none">
      <Path
        d="M24.4672 10.3519L1.63712 12.6908"
        stroke="#1BBA85"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9305 20.8401L24.4685 10.353L13.9814 1.815"
        stroke="#1BBA85"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MySVGComponent;
