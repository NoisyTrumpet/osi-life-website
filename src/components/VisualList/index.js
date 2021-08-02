import * as React from "react";
import { Container, Box, Flex, Grid, GridItem, Text, Heading, useColorModeValue as mode } from "@chakra-ui/react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import PhotoWrapper from "SVG/PhotoWrapper";
import { BLOCKS } from "@contentful/rich-text-types";

const VisualList = ({ id, title, variant, cards }) => {
  const TextWrapper = ({ children }) => (
    <Text color={`#00ADBC`}>
      {children}
    </Text>
  );

  const options = {
    renderNode: {
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

  // Secondary Variant
  if ( variant === 'Secondary' ) {
    return (
      <Container maxW="100%" p={[5, 20]} my={10} bg={mode(`lightGrayBG`)} borderTopLeftRadius={80} borderTopRightRadius={80}>
        <Heading as="h2" ml={10} my={[5, 0]} color="primary">
          {title}
        </Heading>
        {cards.map((card, index) => {
          let imageURL = '';
          if ( card.icon && card.icon.file.url ) {
            imageURL = card.icon.file.url;
          } else if ( card.image && card.image.file.url ) {
            imageURL = card.image.file.url;
          }
          return (
            <Flex
              flexDirection={[
                `column`,
                `column`,
                `column`,
                (index % 2 == 0 && `row`) || `row-reverse`,
                index % 2 == 0 && `row`,
              ]}
              my={`4rem`}
              pb={[5, 20]}
              borderBottom="3px"
              borderStyle="solid"
              borderColor="secondary"
            >
              <Box
                flex={[`100%`, `100%`, `100%`, `30%`, `30%`]}
                my={`auto`}
                py={2}
                mx={4}
              >
                <img
                  src={imageURL}
                  alt="icon"
                />
              </Box>
              <Box
                flex={[`100%`, `100%`, `100%`, `70%`, `70%`]}
                px={[2, 2, 4, 8, 8]}
                py={2}
                mx={4}
                my={`auto`}
              >
                <Heading as="h4" color="primary">
                  {card.title}
                </Heading>
                <p>{card.subtitle}</p>
                <Box align="left" mt={8}>{renderRichText(card.description, options)}</Box>
              </Box>
            </Flex>
          )
        })}
      </Container>
    );
  }

  // Primary Variant
  return (
    <Container maxW="100%" p={[5, 20]} mb={10}>
      <Heading as="h2" mb={5} color="primary">
        {title}
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
      >
        {cards.map((card) => {
          let imageURL = '';
          if ( card.icon && card.icon.file.url ) {
            imageURL = card.icon.file.url;
          } else if ( card.image && card.image.file.url ) {
            imageURL = card.image.file.url;
          }
          return (
            <Box
              m={0}
              py={[10, 20]}
              px={[0, 20]}
              align="center"
              className="visualListBox"
              key={card.title}
              borderBottom="3px"
              borderStyle="solid"
              borderColor="secondary"
            >
              <img
                src={imageURL}
                alt="icon"
                width="140"
              />
              <Heading as="h4" color="primary" my={8}>
                {card.title}
              </Heading>
              <Box align="left">{renderRichText(card.description, options)}</Box>
            </Box>
          )
        })}
      </Grid>
    </Container>
  );
};

export default VisualList;
