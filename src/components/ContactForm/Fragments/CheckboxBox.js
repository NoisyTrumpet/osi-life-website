import { Box, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

const CheckboxBox = (props) => (
  <Box
    borderWidth="2px"
    px="4"
    py="3"
    borderRadius="md"
    cursor="pointer"
    transition="all 0.2s"
    _focus={{
      shadow: "outline",
    }}
    _checked={{
      bg: useColorModeValue("gray.50", "whiteAlpha.100"),
      borderColor: useColorModeValue("blue.500", "blue.300"),
    }}
    {...props}
  />
);

export default CheckboxBox;
