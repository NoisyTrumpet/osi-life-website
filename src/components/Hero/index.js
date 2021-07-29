import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import HandCross from "SVG/HandCross";

const Hero = ({ title, variant, image }) => {
  const [tabletDown] = useMediaQuery("(min-width: 63em)");
  const [isMed] = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <Box
        backgroundColor="primary"
        borderBottomLeftRadius={["178px", "190px", "200px"]}
        position="relative"
      >
        <Grid
          templateColumns={[
            "repeat(1, 100%)",
            "repeat(1, 100%)",
            "repeat(1, 100%)",
            "repeat(1, 100%)",
            "repeat(2, 50%)",
          ]}
        >
          <GridItem px={20} py={[75, 100, 100, 200, 300]}>
            <Heading
              as="h1"
              color="white"
              fontSize={["3xl", "4xl", "5xl", "6xl"]}
              fontWeight={300}
              maxWidth={600}
              m="0 auto"
            >
              {title && title}
            </Heading>
          </GridItem>
          {tabletDown && (
            <GridItem
              position="relative"
              overflow="hidden"
              sx={{
                svg: {
                  width: "750px",
                  maxWidth: "100%",
                  top: "0",
                  right: "-130",
                  position: "absolute",
                },
              }}
              zIndex="3"
            >
              <PhotoWrapper
                image={image.gatsbyImageData.images.fallback.src}
                width={image.gatsbyImageData.width}
                height={image.gatsbyImageData.height}
                id={image.id}
                imgAlt={image.title}
                fillColor="#FFA500"
              />
            </GridItem>
          )}
        </Grid>
        <Box
          position="absolute"
          top="5%"
          left={["10%", "10%", "5%", "5%", "5%"]}
          opacity="0.25"
          w={[130, 170, 170, 270, 370]}
        >
          <HandCross />
        </Box>
        <Box
          position="absolute"
          top={["20%", "20%", "20%", "30%", "30%"]}
          left={["50%", "40%", "40%", "30%", "30%"]}
          opacity="0.25"
          w={[180, 220, 220, 370, 511]}
        >
          <HandCross />
        </Box>
      </Box>
      {!isMed && (
        <Box display="grid" placeItems="center" py={4}>
          <Button variant="secondary">Contact</Button>
        </Box>
      )}
      {!tabletDown && (
        <Box
          position="relative"
          overflowX="hidden"
          h="fit-content"
          sx={{ svg: { width: "100%", marginLeft: "20%" } }}
        >
          <PhotoWrapper
            image={image.gatsbyImageData.images.fallback.src}
            width={image.gatsbyImageData.width}
            height={image.gatsbyImageData.height}
          />
        </Box>
      )}
    </>
  );
};

export default Hero;

Hero.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  image: PropTypes.object,
};
