import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import HandCross from "SVG/HandCross";

const Hero = ({ title, image }) => {
  return (
    <>
      <Box
        backgroundColor="primary"
        borderBottomLeftRadius={["178px", "190px", "200px"]}
        position="relative"
        overflowX={{ base: "hidden" }}
      >
        <Grid
          maxW={1500}
          mx={`auto`}
          // overflowX={{ base: "hidden", "2xl": "visible" }}
          templateColumns={[
            "repeat(1, 100%)",
            "repeat(1, 100%)",
            "repeat(1, 100%)",
            "repeat(2, 50%)",
            "repeat(2, 50%)",
          ]}
        >
          <GridItem
            px={[10, 10, 10, 10, 20]}
            py={[75, 100, 100, 200, 250, 300]}
          >
            <Heading
              as="h1"
              color="white"
              fontSize={["3xl", "4xl", "5xl", "6xl"]}
              fontWeight={300}
              maxWidth={["100%", "100%", 600]}
              m="0 auto"
            >
              {title && title}
            </Heading>
          </GridItem>
          <GridItem
            position="relative"
            w="100%"
            maxH={750}
            display={{
              base: "none",
              lg: "grid",
            }}
            sx={{
              svg: {
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                top: "0",
                right: "-23%",
                position: "absolute",
              },
            }}
            zIndex="3"
          >
            <PhotoWrapper
              image={image}
              safariSource={image.file.url}
              width={image.gatsbyImageData.width}
              height={image.gatsbyImageData.height}
              id={image.id}
              imgAlt={image.title}
              fillColor="#FFA500"
              crossColor="#FFA500"
              imageFlip={"-1"} // either 1 or -1
            />
          </GridItem>
        </Grid>
        <Box
          position="absolute"
          top="5%"
          left={["10%", "10%", "5%", "5%", "5%"]}
          opacity="0.25"
          w={[130, 170, 170, 270, 370]}
        >
          <HandCross fillColor="#ffffff" />
        </Box>
        <Box
          position="absolute"
          top={["20%", "20%", "20%", "30%", "30%"]}
          left={["50%", "40%", "40%", "30%", "30%"]}
          opacity="0.25"
          w={[180, 220, 220, 370, 511]}
        >
          <HandCross fillColor="#ffffff" />
        </Box>
      </Box>
      <Box
        display={{
          sm: "grid",
          md: "grid",
          lg: "none",
        }}
        placeItems="center"
        py={4}
        w="100%"
      >
        <a href="#contact" alt="contact">
          <Button display="block" margin="0 auto" variant="secondary">
            Contact
          </Button>
        </a>
      </Box>
      {image && (
        <Box
          position="relative"
          overflowX="hidden"
          h="fit-content"
          display={{
            md: "block",
            lg: "none",
          }}
          sx={{ svg: { width: "80%", marginLeft: "33%" } }}
        >
          <PhotoWrapper
            image={image}
            safariSource={image.file.url}
            width={image.gatsbyImageData.width}
            height={image.gatsbyImageData.height}
            id={`${image.id}-mobile`}
            imgAlt={image.title}
            fillColor="#FFA500"
            crossColor="#FFA500"
            imageFlip={"-1"} // either 1 or -1
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
