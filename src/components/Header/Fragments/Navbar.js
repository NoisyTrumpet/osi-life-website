import React, { isValidElement } from "react";
import {
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MobileNavContent } from "./MobileNavContent";

export const Template = (props) => {
  const children = React.Children.toArray(props.children).filter(
    isValidElement
  );
  const mobileNav = useDisclosure();
  return (
    <Flex
      py={4}
      px={{
        base: 4,
        md: 6,
        lg: 8,
      }}
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={useColorModeValue("md", "gray.800")}
      borderBottomWidth={useColorModeValue("none", "1px")}
    >
      {children.find((child) => child.type === Brand)?.props.children}

      <HStack
        spacing={3}
        display={{
          base: "none",
          md: "none",
          lg: "flex",
        }}
      >
        {children.find((child) => child.type === Links)?.props.children}
      </HStack>
      <Spacer />
      <HStack
        display={{
          base: "none",
          md: "none",
          lg: "flex",
        }}
        spacing={3}
      >
        {children.find((child) => child.type === Button)?.props.children}
      </HStack>

      <IconButton
        display={{
          base: "flex",
          md: "flex",
          lg: "none",
        }}
        size="sm"
        aria-label="Open menu"
        fontSize="20px"
        variant="ghost"
        onClick={mobileNav.onOpen}
        icon={<HamburgerIcon />}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
        <Stack spacing={5}>
          <Flex>
            {children.find((child) => child.type === Brand)?.props.children}
          </Flex>
          <Stack>
            {children.find((child) => child.type === Links)?.props.children}
          </Stack>
          <Divider />
          <Flex>
            {children.find((child) => child.type === Button)?.props.children}
          </Flex>
        </Stack>
      </MobileNavContent>
    </Flex>
  );
};

const Brand = () => null;

const Links = () => null;

const Button = () => null;

const Navbar = Object.assign(Template, {
  Brand,
  Links,
  Button,
});

export default Navbar;
