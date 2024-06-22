import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      fill="#1BBA85"
      fillRule="evenodd"
      d="M0 16.916c0-.657.533-1.19 1.19-1.19h20.628a1.19 1.19 0 0 1 0 2.38H1.19A1.19 1.19 0 0 1 0 16.916Z"
      clipRule="evenodd"
    />
    <Path
      fill="#1BBA85"
      fillRule="evenodd"
      d="M14.63 8.141a1.19 1.19 0 0 1 1.683 0l7.821 7.822c.527.527.527 1.38 0 1.907l-7.821 7.822a1.19 1.19 0 1 1-1.683-1.683l7.092-7.093-7.092-7.092a1.19 1.19 0 0 1 0-1.683Z"
      clipRule="evenodd"
    />
    <Path
      fill="#1BBA85"
      fillRule="evenodd"
      d="M21.157 2.107c0-.658.533-1.19 1.19-1.19h7.246c.745 0 1.35.603 1.35 1.348v29.303c0 .745-.605 1.348-1.35 1.348H21.29a1.19 1.19 0 1 1 0-2.38h7.273V3.296h-6.215a1.19 1.19 0 0 1-1.19-1.19Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
