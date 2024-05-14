import React from "react";
import Fonts from "../../@chakra-ui/gatsby-plugin/theme/foundations/fonts";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
// Fonts
import "@fontsource/baloo-2";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "components/Header";
import Footer from "components/Footer";
import { useLocation } from "@reach/router";
import { SkipNavContent, SkipNavLink } from "components/SkipNav/index";
import "Styles/main.scss";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
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
