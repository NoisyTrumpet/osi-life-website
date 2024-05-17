import { useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import UniversalLink from "components/UniversalLink";
const MenuItem = (props) => {
  const { title, href } = props;
  return (
    <UniversalLink
      display="flex"
      px="5"
      py="3"
      to={href}
      rounded="lg"
      _hover={{
        bg: mode("secondary", "white"),
        color: "white",
      }}
      color="secondary"
      fontWeight="500"
      transition="0.2s all"
    >
      {title}
    </UniversalLink>
  );
};

export default MenuItem;
