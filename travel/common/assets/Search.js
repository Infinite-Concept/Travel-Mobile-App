import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M6.966 1.125a5.216 5.216 0 1 0 0 10.432 5.216 5.216 0 0 0 0-10.432Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m10.857 10.232 3.643 3.643"
    />
  </Svg>
)
export default SvgComponent
