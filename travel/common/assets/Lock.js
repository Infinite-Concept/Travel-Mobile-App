import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect
      width={23.237}
      height={16.004}
      x={4.382}
      y={13.81}
      stroke="#1BBA85"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      rx={1}
    />
    <Path
      stroke="#1BBA85"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16.117 20.56v2.452M10.335 12.817v-4.63a6 6 0 0 1 6-6h1.2a6 6 0 0 1 6 6v.982"
    />
  </Svg>
)
export default SvgComponent
