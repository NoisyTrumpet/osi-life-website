import {
  Box,
  HStack,
  Text,
  useColorModeValue as mode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
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
    <>
      {/* Mobile Accordion */}
      <Accordion display={["block", "block", "block", "none"]} allowToggle>
        <AccordionItem>
          <AccordionButton display="flex" justifyContent="space-between" pl={3} id={`accordion-button`}>
            <UniversalLink to={link} aria-label={title} padding="0" zIndex="3">
              <Text
                fontWeight={`bold`}
                color="primary"
                fontFamily={`"Baloo 2"`}
                fontSize={`var(--chakra-fontSizes-lg)`}
              >
                {title && title}
              </Text>
            </UniversalLink>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p="2">
            <Box as="ul" listStyleType="none">
              {useLinks.map((link, idx) => (
                <Box as="li" key={`sub-menu-item-${idx}`} mx={0} color="secondary">
                  <MenuItem href={link.href} title={link.title} />
                </Box>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/* Desktop Hover Box */}
      <Box
        as="div"
        pos="relative"
        height="fit-content"
        overflow="visible"
        role="group"
        display={["none", "none", "none", "block"]}
      >
        <Box maxW={["100%", "7xl"]}>
          <HStack p="0">
            <UniversalLink
              to={link}
              aria-label={title}
              fontWeight={500}
              // color="primary"
              fontFamily={`"Baloo 2"`}
              fontSize={`var(--chakra-fontSizes-lg)`}
            >
              {title && title}
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
            color="secondary"
            boxShadow={"gray.800"}
            borderBottomWidth={"1px"}
            fontSize={`var(--chakra-fontSizes-lg)`}
          >
            <Box as="ul" listStyleType="none" px="2" pb="2">
              {useLinks.map((link, idx) => (
                <Box 
                  as="li" 
                  key={`sub-nav-${idx}-link-${link.title}`}
                  mx={0} 
                  color="secondary">
                  <MenuItem href={link.href} title={link.title} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SubMenu;
