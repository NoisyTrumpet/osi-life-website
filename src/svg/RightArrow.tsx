import * as React from "react";
import { SVGProps } from "react";
const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 18"
    fill="none"
    {...props}
  >
    <path
      fill="#00ACBC"
      d="M9.999 8.944a1.515 1.515 0 0 0-.405-.984L2.534.46a1.46 1.46 0 0 0-1.032-.46 1.457 1.457 0 0 0-1.05.418A1.515 1.515 0 0 0 0 1.472c-.007.398.14.783.41 1.07L6.488 9 .411 15.458c-.27.287-.418.672-.41 1.07.007.399.17.777.451 1.053.282.276.66.427 1.05.419a1.46 1.46 0 0 0 1.032-.461l7.06-7.499A1.504 1.504 0 0 0 10 8.944Z"
    />
  </svg>
);
export default RightArrow;
