import React from "react";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
// Fonts
import "@fontsource/baloo-2";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "Components/Header";
import Footer from "Components/Footer";
import { SkipNavContent, SkipNavLink } from "Components/SkipNav/index";

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
