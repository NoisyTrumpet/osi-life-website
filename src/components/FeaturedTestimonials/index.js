import { Box, Text, Container, Grid, GridItem, Img } from "@chakra-ui/react";
import React from "react";
import ChakraCaousel from "./Fragments/ChakraCarousel";
// Testimonials Component

const FeaturedTestimonials = ({ title, items }) => {
  return (
    <Box borderTopRightRadius={80} bg="darkBG">
      <Container py={6}>
        <Text
          my={4}
          color="secondary"
          fontSize="4xl"
          textAlign={["left", "center"]}
        >
          {title}
        </Text>
        <ChakraCaousel gap={32}>
          {items.map((item) => (
            <Grid key={item.id} templateColumns={"25% 75%"} gap={2}>
              <GridItem display="grid" placeItems="center">
                <Img src={item.image.file.url} />
              </GridItem>
              <GridItem>
                <Text fontSize="2xl" color="secondary">
                  {item.name}
                </Text>
                <Text fontSize="lg" color="white" textDecoration="italic">
                  "{item.quote.internal.content}"
                </Text>
              </GridItem>
            </Grid>
          ))}
        </ChakraCaousel>
      </Container>
    </Box>
  );
};

export default FeaturedTestimonials;
