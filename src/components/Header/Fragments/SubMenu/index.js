import { Box, HStack, Text, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import UniversalLink from "../../../UniversalLink";
import MenuItem from "./Fragments/MenuItem";

const SubMenu = ({ title, link, links }) => {
  const useLinks = [];
  for (let i = 0; i < links.length; i++) {
    useLinks.push({
      href: links[i].url.split("https://osi-life.netlify.app")[1],
      title: links[i].title,
    });
  }

  return (
    <Box
      as="div"
      pos="relative"
      height="fit-content"
      overflow="visible"
      role="group"
    >
      <Box maxW="7xl">
        <HStack as="button" color={mode("black", "white")} p="0">
          <UniversalLink to={link} aria-label={title}>
            <Text fontWeight={`bold`} color="primary" fontFamily={`"Baloo 2"`}>
              {title && title}
            </Text>
          </UniversalLink>
          {/* <Box as={HiChevronDown} fontSize="lg" color="secondary" /> */}
        </HStack>
        <Box
          className="dropDown"
          // in={show}
          display={`none`}
          _groupHover={{
            display: `block`,
          }}
          pos="absolute"
          zIndex={99}
          top={[8]}
          bg={mode("white", "gray.700")}
          pt="2"
          w="xl"
          maxW="lg"
          rounded="lg"
          overflow="visible"
          shadow="xl"
          color="primary"
        >
          <Box as="ul" listStyleType="none" px="2" pb="2">
            {useLinks.map((link, idx) => (
              <Box as="li" key={idx} mx={0} color="primary">
                <MenuItem href={link.href} title={link.title} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubMenu;
