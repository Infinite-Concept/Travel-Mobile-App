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
      clipPath="url(#a)"
    >
      <Path
        strokeWidth={3}
        d="M13.447 4.293c.65-2.676 4.456-2.676 5.105 0a2.626 2.626 0 0 0 3.921 1.624c2.351-1.433 5.044 1.259 3.611 3.611a2.627 2.627 0 0 0 1.623 3.92c2.676.649 2.676 4.455 0 5.104a2.627 2.627 0 0 0-1.624 3.921c1.432 2.351-1.259 5.044-3.611 3.611a2.627 2.627 0 0 0-3.92 1.623c-.649 2.676-4.455 2.676-5.104 0a2.628 2.628 0 0 0-3.921-1.624c-2.351 1.432-5.044-1.259-3.612-3.611a2.627 2.627 0 0 0-1.622-3.92c-2.676-.649-2.676-4.455 0-5.104a2.627 2.627 0 0 0 1.624-3.921C4.484 7.176 7.176 4.483 9.528 5.915a2.626 2.626 0 0 0 3.92-1.622Z"
      />
      <Path
        strokeWidth={4}
        d="M20.571 16a4.571 4.571 0 1 1-9.142 0 4.571 4.571 0 0 1 9.142 0v0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
