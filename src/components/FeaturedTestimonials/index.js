import { Box, Text, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

import ChakraCaousel from "./Fragments/ChakraCarousel";
// Testimonials Component

const FeaturedTestimonials = ({ title, items }) => {
  return (
    <Box bg="lightBG">
      <Box borderTopRightRadius={80} bg="white">
        <Container py={6} maxWidth={`1500px`} mx={`auto`} px={0}>
          <div
            className={`flex flex-row justify-start items-center gap-4 w-full text-center`}
          >
            <Text
              my={4}
              color="darkGray"
              fontSize="6xl"
              textAlign={"center"}
              fontFamily={`var(--chakra-fonts-heading)`}
              id="testimonial-label"
              px={[4, 0]}
            >
              {title}
            </Text>
            <div
              className={`flex-grow h-[2px] bg-secondary rounded hidden md:flex`}
            />
          </div>
          <ChakraCaousel gap={32}>
            {items.map((item) => (
              <Grid
                key={item.id}
                gap={2}
                className={`bg-gray px-4 py-8 md:px-12 md:py-16 rounded-lg`}
              >
                <GridItem>
                  <Text
                    fontSize="3xl"
                    color="darkGray"
                    fontFamily={`var(--chakra-fonts-heading)`}
                  >
                    {item.name}
                  </Text>
                  <Text fontSize="lg" color="darkGray" textDecoration="italic">
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
