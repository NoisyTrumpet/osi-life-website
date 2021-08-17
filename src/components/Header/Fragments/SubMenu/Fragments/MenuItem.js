import { Text, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import UniversalLink from "Components/UniversalLink";
const MenuItem = (props) => {
  const { title, href } = props;
  return (
    <UniversalLink
      display="flex"
      px="5"
      py="3"
      to={href}
      rounded="lg"
      transition="0.2s background"
      _hover={{
        bg: mode("primary", "white"),
        color: "white!important",
      }}
    >
      <Text fontWeight="500" transition="0.2s all">
        {title}
      </Text>
    </UniversalLink>
  );
};

export default MenuItem;
