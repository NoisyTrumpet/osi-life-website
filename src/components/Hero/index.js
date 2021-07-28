import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import PhotoWrapper from "SVG/PhotoWrapper";

const Hero = ({ title, variant, image }) => {
  console.log(image);
  return (
    <Box backgroundColor="primary" borderBottomLeftRadius="200px">
      <Grid templateColumns={["repeat(2, 50%)"]}>
        <GridItem px={20} py={350}>
          <Heading as="h1" color="white">
            {title && title}
          </Heading>
        </GridItem>
        <GridItem
          position="relative"
          overflow="hidden"
          sx={{
            svg: {
              width: "700px",
              maxWidth: "100%",
              top: "0",
              right: "-130",
              position: "absolute",
            },
          }}
        >
          <PhotoWrapper
            image={image.gatsbyImageData.images.fallback.src}
            width={image.gatsbyImageData.width}
            height={image.gatsbyImageData.height}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Hero;

Hero.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  image: PropTypes.object,
};
