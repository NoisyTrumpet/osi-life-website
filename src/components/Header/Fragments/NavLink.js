import { useColorModeValue as mode, chakra } from "@chakra-ui/react";
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

const ChakraLink = chakra(GatsbyLink, {
  baseStyle: {
    transition: "all .2s ease-in-out",
    display: "block",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: "md",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    color: "primary",
    fontFamily: `var(--chakra-fonts-heading)`,
  },
});

export const NavLink = (props) => {
  const { isActive, ...rest } = props;
  return (
    <ChakraLink
      aria-current={isActive ? "page" : undefined}
      _hover={{
        bg: mode("#5B677014", "gray.700"),
      }}
      _activeLink={{
        // bg: mode("blue.600", "blue.200"),
        color: mode("secondary", "gray.900"),
      }}
      {...rest}
    />
  );
};
