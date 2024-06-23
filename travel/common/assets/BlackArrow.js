import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#191C32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10.003 5-6.846 7.158m0 0 6.846 7.158m-6.846-7.158h17.685"
    />
  </Svg>
)
export default SvgComponent
