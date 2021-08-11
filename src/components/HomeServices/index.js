import {
  // useColorModeValue as mode,
  Heading,
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FaChevronRight } from "react-icons/fa";
import RichText from "components/RichText";

const HomeServices = ({ title, subTitle, services }) => {
  return (
    <Container>
      <Box my={8}>
        <Heading color={`primary`}>{title}</Heading>
        <Text fontSize={`1.5em`} color={`primary`} px={[4, 4, 8, 10, 10]}>
          {subTitle}
        </Text>
      </Box>
      <Accordion allowMultiple mb={8}>
        <Flex direction={[`column`, `column`, `column`, `row`, `row`]}>
          {services.map((service) => (
            <AccordionItem
              border={`none`}
              maxW={[`90%`, `75%`, `75%`, `40%`, `40%`]}
              mx={`auto`}
              key={service.title}
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    color={`primary`}
                    fontWeight={500}
                    fontSize={18}
                    mx={`auto`}
                    px={1}
                    alignItems={`flex-start`}
                    display={`flex`}
                    flexDirection={`column`}
                    _expanded={{
                      display: `grid`,
                      gridTemplateColumns: `70% 30%`,
                      gridTemplateRows: `repeat(2, auto)`,
                    }}
                  >
                    <Box
                      gridRowStart={`1`}
                      gridColumnStart={`2`}
                      borderBottomRadius={`20%`}
                      borderTopRightRadius={`20%`}
                      bg={`lightGrayBG`}
                      px={[1, 1, 4, 4, 4]}
                      pt={2}
                      overflow={`hidden`}
                      maxH={[`350px`, `500px`, `600px`, `400px`, `400px`]}
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
                      <Text
                        fontSize={[`1.6em`, `1.6em`, `2em`, `2em`, `2em`]}
                        lineHeight={1}
                      >
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
                        fontSize={[`2.6em`, `2.6em`, `3.3em`, `3.3em`, `3.3em`]}
                        lineHeight={1}
                      >
                        {service.title}
                      </Heading>
                      {isExpanded ? (
                        <Box display={`none`} alignItems={`center`}>
                          <Text mr={2}>Read More</Text>
                          <FaChevronRight />
                        </Box>
                      ) : (
                        <Box display={`inline-flex`} alignItems={`center`}>
                          <Text mr={2}>Read More</Text>
                          <FaChevronRight />
                        </Box>
                      )}
                    </Box>
                  </AccordionButton>
                  <AccordionPanel py={4} px={2} textAlign={`left`}>
                    <RichText content={service.description} />
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Flex>
      </Accordion>
    </Container>
  );
};

export default HomeServices;
