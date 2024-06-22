import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <G
      stroke="#1BBA85"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      clipPath="url(#a)"
    >
      <Path d="M16 29.714c7.574 0 13.714-6.14 13.714-13.714 0-7.574-6.14-13.714-13.714-13.714C8.426 2.286 2.286 8.426 2.286 16c0 7.574 6.14 13.714 13.714 13.714Z" />
      <Path d="M12.12 12a4 4 0 0 1 7.774 1.333c0 2.667-4 4-4 4M16 22.666h.013" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
