import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import InfoGraphic from "SVG/InfoGraphic";

const ServiceHero = ({ title, variant, image }) => {
  return (
    <>
      <Box
        backgroundColor="lightGrayBG"
        borderTopRightRadius={["178px", "190px", "200px"]}
        position="relative"
        pb={4}
      >
        <Grid
          maxWidth={`1500px`}
          mx={`auto`}
          templateColumns={[
            "repeat(1, 100%)",
            "repeat(1, 100%)",
            "repeat(1, 100%)",
            "repeat(2, 50%)",
            "repeat(2, 50%)",
          ]}
        >
          <GridItem
            position="relative"
            overflow={{ base: "hidden", "2xl": "visible" }}
            sx={{
              svg: {
                width: "750px",
                maxWidth: "100%",
                height: "auto",
                top: "0",
                right: { base: "23%", md: "17%", lg: "23%" },
                position: "relative",
                transform: "scaleX(-1)",
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
              fillColor="#00ADBC"
              crossColor="#FFA500"
              crossesFlip="-1" // either 1 or -1
            />
          </GridItem>
          <GridItem
            alignSelf={`centrer`}
            justifySelf={`center`}
            px={[2, 4, 4, 8, 8]}
            pt={16}
            w={`100%`}
            maxH={780}
            sx={{
              svg: {
                height: "auto",
              },
            }}
          >
            <InfoGraphic
              width={`100%`}
              height={`auto`}
              style={{ maxHeight: `100%` }}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default ServiceHero;

ServiceHero.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  image: PropTypes.object,
};
