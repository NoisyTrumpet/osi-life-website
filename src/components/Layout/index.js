import React from "react";
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
  console.log(useLocation());

  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer path={pathname} />
    </ChakraProvider>
  );
};

export default Layout;
