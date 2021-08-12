import React from "react";
import Fonts from "../../@chakra-ui/gatsby-plugin/theme/foundations/fonts";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
// Fonts
import "@fontsource/baloo-2";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "Components/Header";
import Footer from "Components/Footer";
import { useLocation } from "@reach/router";
import { SkipNavContent, SkipNavLink } from "Components/SkipNav/index";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  // console.log(useLocation());
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
  }

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer path={pathname} />
    </ChakraProvider>
  );
};

export default Layout;
