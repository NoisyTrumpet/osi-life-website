import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

/**
 * This file is set up as per recommendation of
 * https://chakra-ui.com/docs/theming/customize-theme
 */

// Global styles
import styles from "./styles";

// Components overrides & custom
import Container from "./components/container";
import Button from "./components/button";

// Foundations
import sizes from "./foundations/sizes";
import colors from "./foundations/colors";

// Custom breakpoints
const breakpoints = createBreakpoints({
  sm: `640px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1280px`,
  "2xl": `1536px`,
});

const theme = extendTheme({
  styles,
  space: sizes,
  sizes,
  colors,
  components: {
    Container,
    Button,
  },
  breakpoints,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `"Baloo 2"`,
    body: `"Baloo 2"`,
  },
});

export default theme;