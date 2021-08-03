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
import { GatsbyImage } from "gatsby-plugin-image";
import { FaArrowRight } from "react-icons/fa";

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
      <Accordion allowMultiple mb={8}>
        <Flex direction={[`column`, `column`, `column`, `row`, `row`]}>
          {services.map((service) => (
            <AccordionItem
              border={`none`}
              maxW={[`90%`, `75%`, `60%`, `40%`, `40%`]}
              mx={`auto`}
              key={service.title}
            >
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
                  gridTemplateColumns: `70% 30%`,
                  gridTemplateRows: `100px`,
                }}
              >
                <Box
                  gridRowStart={`1`}
                  gridColumnStart={`2`}
                  borderBottomRadius={`20%`}
                  borderTopRightRadius={`20%`}
                  bg={`lightGrayBG`}
                  px={4}
                  pt={2}
                  overflow={`hidden`}
                  maxH={[`350px`, `350px`, `350px`, `350px`, `350px`]}
                  zIndex={-1}
                >
                  <GatsbyImage
                    image={service.image.gatsbyImageData}
                    alt={service.image.title}
                    w={`80%`}
                    h={`auto`}
                  />
                </Box>
                <Box
                  textAlign={`left`}
                  gridRowStart={`1`}
                  gridColumnStart={`1`}
                  alignSelf={`end`}
                  mt={2}
                >
                  <Text fontSize={`2em`} lineHeight={1}>
                    {service.subtitle}
                  </Text>
                </Box>
                <Box
                  textAlign={`left`}
                  gridRowStart={`2`}
                  gridColumnStart={`1`}
                  gridColumnEnd={`3`}
                >
                  <Heading
                    color={`secondary`}
                    fontSize={`3.3em`}
                    lineHeight={1}
                  >
                    {service.title}
                  </Heading>
                  <Box display={`inline-flex`} alignItems={`center`}>
                    <Text mr={2}>Read More</Text>
                    <FaArrowRight />
                  </Box>
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
