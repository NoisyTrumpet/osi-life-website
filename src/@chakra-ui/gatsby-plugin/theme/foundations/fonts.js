import * as React from "react";
import { Global } from "@emotion/react";
import GTAmerica from "../fonts/GT-America-Regular.otf";
import GTAmericaBold from "../fonts/GT-America-Bold.otf";
import GTAmericaBoldItalic from "../fonts/GT-America-Bold-Italic.otf";

const Fonts = () => (
  <Global
    styles={`
      /* Regular */
      @font-face {
        font-family: 'GT America';
        font-style: normal;
        font-weight: normal;
        src: url(${GTAmerica});
        font-display: swap;
      }
      /* Bold */
      @font-face {
        font-family: 'GT America';
        font-style: normal;
        font-weight: bold;
        src: url(${GTAmericaBold});
        font-display: swap;
      }
      /* Bold Italic */
      @font-face {
        font-family: 'GT America';
        font-style: italic;
        font-weight: bold;
        src: url(${GTAmericaBoldItalic});
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
