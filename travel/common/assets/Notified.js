import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={22}
      height={20}
      x={3}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M3.375 1.125h20.809v19.517H3.375V1.125Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M13.778 2.813c-3.932 0-6.672 3.08-6.672 5.844 0 2.339-.65 3.42-1.223 4.374-.46.766-.824 1.371-.824 2.686.188 2.122 1.589 3.237 8.719 3.237 7.09 0 8.535-1.164 8.722-3.31-.003-1.242-.367-1.847-.827-2.613-.574-.954-1.223-2.035-1.223-4.374 0-2.764-2.74-5.845-6.672-5.845Zm0 17.829c-5.26 0-10.015-.372-10.403-4.853-.003-1.854.563-2.796 1.062-3.627.505-.841.981-1.634.981-3.505 0-3.637 3.36-7.532 8.36-7.532s8.36 3.895 8.36 7.532c0 1.87.476 2.664.98 3.505.5.83 1.066 1.773 1.066 3.555-.393 4.553-5.146 4.925-10.406 4.925Z"
        clipRule="evenodd"
      />
    </G>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.723 25.312h-.002c-1.261 0-2.455-.556-3.36-1.566a.842.842 0 1 1 1.254-1.127c.582.65 1.33 1.006 2.107 1.006.78 0 1.532-.357 2.116-1.007a.845.845 0 0 1 1.254 1.13c-.909 1.009-2.105 1.564-3.37 1.564Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
