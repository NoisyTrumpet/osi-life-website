import { Box, Text, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

import ChakraCaousel from "./Fragments/ChakraCarousel";
// Testimonials Component

const FeaturedTestimonials = ({ title, items, key }) => {
  return (
    <Box bg="lightBG">
      <Box borderTopRightRadius={80} bg="darkBG" key={key}>
        <Container py={6}>
          <Text
            my={4}
            color="secondary"
            fontSize="6xl"
            textAlign={["left", "center"]}
            fontFamily={`var(--chakra-fonts-heading)`}
            id="testimonial-label"
          >
            {title}
          </Text>
          <ChakraCaousel gap={32}>
            {items.map((item) => (
              <Grid key={item.id} templateColumns={"25% 75%"} gap={2}>
                <GridItem display="grid" placeItems="center">
                  <Image
                    src={item.image.file.url}
                    alt={item.name}
                    htmlWidth="145"
                    htmlHeight="150"
                  />
                </GridItem>
                <GridItem>
                  <Text
                    fontSize="3xl"
                    color="secondary"
                    fontFamily={`var(--chakra-fonts-heading)`}

                  >
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
    </Box>
  );
};

export default FeaturedTestimonials;
