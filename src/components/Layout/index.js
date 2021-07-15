import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
import { ChakraProvider } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Layout;
