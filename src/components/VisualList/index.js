import * as React from "react";
import { Container, Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import RichText from "components/RichText";
import MultiHandCross from "svg/MultiHandCross";

const VisualList = ({ id, title, variant, cards }) => {
  // Secondary Variant
  if (variant === "Secondary") {
    return (
      <Box mb={0} pb={10}>
        <Container
          maxW="1500px"
          p={[5, 20]}
          borderTop="2px"
          borderStyle="solid"
          borderColor="secondary"
        >
          <Heading
            as="h2"
            ml={10}
            my={[5, 0]}
            color="darkGray"
            textAlign={"center"}
          >
            {title}
          </Heading>
          {/* {let imageURL = "";
            if (card.icon && card.icon.file.url) {
              imageURL = card.icon.file.url;
            } else if (card.image && card.image.file.url) {
              imageURL = card.image.file.url;
            }} */}
          {cards.map((card, index) => (
            <Flex
              flexDirection={[`column`, `column`, `column`, `row`]}
              pb={[5, 20]}
              _last={{
                borderBottomWidth: 0,
                pb: 0,
                mb: 0,
              }}
              key={card.id}
            >
              <Box
                flex={[`100%`, `100%`, `100%`, `30%`, `30%`]}
                my={`auto`}
                py={2}
                mx={4}
                alignSelf={`center`}
                sx={{
                  svg: {
                    height: "auto",
                  },
                }}
              >
                <Image
                  src={card.icon ? card.icon.file.url : card.image.file.url}
                  alt={card.title}
                  width="100%"
                  height="auto"
                  htmlWidth="140"
                  htmlHeight="140"
                />
              </Box>
              <Box
                flex={[`100%`, `100%`, `100%`, `70%`, `70%`]}
                px={[2, 2, 4, 8, 8]}
                py={2}
                mx={4}
                my={`auto`}
              >
                <Heading as="h4" className={`uppercase`} color="darkGray">
                  {card.title}
                </Heading>
                <p className={`uppercase`} color="darkGray">{card.subtitle}</p>
                <Box align="left" mt={4}>
                  <RichText content={card.description} />
                </Box>
              </Box>
            </Flex>
          ))}
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
            imageURL = `https:${card.icon.file.url.split(["//"][1])}`;
          } else if (card.image && card.image.file.url) {
            imageURL = `https:${card.image.file.url.split(["//"][1])}`;
          }
          return (
            <Box
              m={0}
              py={10}
              px={[0, 10]}
              align="center"
              className="visualListBox"
              key={card.id}
              borderBottom="3px"
              borderStyle="solid"
              borderColor="secondary"
              _last={{
                borderBottomWidth: 0,
              }}
              sx={{
                svg: {
                  height: "auto",
                },
              }}
            >
              <Image
                src={imageURL}
                alt={card.title}
                width="140"
                height="140"
                htmlWidth="140"
                htmlHeight="140"
              />
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
          display={{ base: `none`, lg: `block` }}
          maxHeight={450}
          alignSelf={`center`}
          justifySelf={`center`}
          sx={{
            svg: {
              height: ["auto", "auto", "auto", "auto", "30rem"],
            },
          }}
        >
          <MultiHandCross fill="#5B677014" />
        </Box>
      </Grid>
    </Container>
  );
};

export default VisualList;
