import * as React from "react";
import {
  Container,
  Box,
  Flex,
  Grid,
  Heading,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import RichText from "components/RichText";
import MultiHandCross from "SVG/MultiHandCross";
// import PhotoWrapper from "SVG/PhotoWrapper";

const VisualList = ({ id, title, variant, cards }) => {
  // Secondary Variant
  if (variant === "Secondary") {
    return (
      <Box
        bg={mode(`lightGrayBG`)}
        borderTopLeftRadius={80}
        borderTopRightRadius={80}
      >
        <Container maxW="1500px" p={[5, 20]} mt={10}>
          <Heading as="h2" ml={10} my={[5, 0]} color="primary">
            {title}
          </Heading>
          {cards.map((card, index) => {
            let imageURL = "";
            if (card.icon && card.icon.file.url) {
              imageURL = card.icon.file.url;
            } else if (card.image && card.image.file.url) {
              imageURL = card.image.file.url;
            }
            return (
              <Flex
                flexDirection={[
                  `column`,
                  `column`,
                  `column`,
                  (index % 2 === 0 && `row`) || `row-reverse`,
                  index % 2 === 0 && `row`,
                ]}
                my={`4rem`}
                pb={[5, 20]}
                borderBottom="3px"
                borderStyle="solid"
                borderColor="secondary"
                _last={{
                  borderBottomWidth: 0,
                  pb: 0,
                  mb: 0,
                }}
              >
                <Box
                  flex={[`100%`, `100%`, `100%`, `30%`, `30%`]}
                  my={`auto`}
                  py={2}
                  mx={4}
                >
                  <img src={imageURL} alt="icon" />
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
                  <Box align="left" mt={4}>
                    <RichText content={card.description} />
                  </Box>
                </Box>
              </Flex>
            );
          })}
        </Container>
      </Box>
    );
  }

  // Primary Variant
  return (
    <Container maxW="1500px" p={[5, 20]} mb={10}>
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
          let imageURL = "";
          if (card.icon && card.icon.file.url) {
            imageURL = card.icon.file.url;
          } else if (card.image && card.image.file.url) {
            imageURL = card.image.file.url;
          }
          return (
            <Box
              m={0}
              py={[10, 20]}
              px={[0, 20]}
              align="center"
              className="visualListBox"
              key={card.id}
              borderBottom="3px"
              borderStyle="solid"
              borderColor="secondary"
              _last={{
                borderBottomWidth: 0,
              }}
            >
              <img src={imageURL} alt="icon" width="140" />
              <Heading as="h4" color="primary" mt={8} mb={4}>
                {card.title}
              </Heading>
              <Box align="left">
                <RichText content={card.description} />
              </Box>
            </Box>
          );
        })}
        <Box
          display={[`none`, `none`, `none`, `block`, `block`]}
          h={`100%`}
          maxHeight={450}
          alignSelf={`center`}
          justifySelf={`center`}
        >
          <MultiHandCross fill="#5B677014" />
        </Box>
      </Grid>
    </Container>
  );
};

export default VisualList;
