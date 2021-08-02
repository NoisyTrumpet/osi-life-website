import {
  Image,
  useColorModeValue as mode,
  Heading,
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { Link } from "gatsby";

const HomeServices = ({ title, subTitle, services }) => {
  const TextWrapper = ({ children }) => (
    <Text color={`red`} className="styleing">
      {children}
    </Text>
  );
  const Linker = ({ children, data }) => {
    const link = data.data.uri;
    return (
      <Link to={link} aria-label={children} fontWeight="bold">
        {children}
      </Link>
    );
  };

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Linker data={node}>{children}</Linker>
      ),
      [BLOCKS.text]: (node, children) => <TextWrapper>{children}</TextWrapper>,
      [BLOCKS.list_item]: (node, children) => (
        <TextWrapper>{children}</TextWrapper>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  return (
    <Container>
      <Box my={8}>
        <Heading color={`primary`}>{title}</Heading>
        <Text fontSize={`1.5em`} color={`primary`}>
          {subTitle}
        </Text>
      </Box>
      <Accordion allowToggle mb={8}>
        <Flex direction={`row`}>
          {services.map((service) => (
            <AccordionItem border={`none`} w={`40%`} mx={`auto`}>
              <AccordionButton
                color={`primary`}
                fontWeight={500}
                fontSize={18}
                mx={`auto`}
                alignItems={`flex-start`}
                display={`flex`}
                flexDirection={`column`}
                _expanded={{
                  display: `grid`,
                  gridTemplateRows: `repeat(2, auto)`,
                  gridTemplateColumns: `80% 20%`,
                }}
              >
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={service.image.gatsbyImageData}
                  alt={service.image.title}
                  gridRowStart={`1`}
                  gridColumnStart={`2`}
                  borderBottomRadius={28}
                  borderTopRightRadius={28}
                />
                {/* <Box
                  bg={`grey`}
                  w={`100%`}
                  h={`100px`}
                  gridRowStart={`1`}
                  gridColumnStart={`2`}
                  borderBottomRadius={28}
                  borderTopRightRadius={28}
                ></Box> */}
                <Box
                  textAlign={`left`}
                  gridRowStart={`1`}
                  gridColumnStart={`1`}
                  alignSelf={`end`}
                >
                  <Text fontSize={`2em`}>{service.subtitle}</Text>
                </Box>
                <Box
                  textAlign={`left`}
                  gridRowStart={`2`}
                  gridColumnStart={`1`}
                  gridColumnEnd={`3`}
                >
                  <Heading color={`secondary`} fontSize={`3.3em`}>
                    {service.title}
                  </Heading>
                </Box>
              </AccordionButton>
              <AccordionPanel py={4} textAlign={`left`}>
                {renderRichText(service.description, options)}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Flex>
      </Accordion>
    </Container>
  );
};

export default HomeServices;
