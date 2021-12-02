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
          // maxHeight={`750px`}
          overflowX={{ base: "hidden", "2xl": "visible" }}
          templateColumns={{
            base: "repeat(1, 100%)",
            lg: "55% 45%",
          }}
          templateRows={{ base: "repeat(2, auto)", lg: "repeat(1, auto)" }}
        >
          <GridItem
            position="relative"
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
              image={image}
              safariSource={image.file.url}
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
            alignSelf={`center`}
            justifySelf={`center`}
            px={{ base: 4, md: 8 }}
            py={8}
            w={`100%`}
            // maxH={700}
            // position="relative"
            sx={{
              svg: {
                width: "6000px",
                maxWidth: "100%",
                height: "auto",
                m: `auto`,
              },
            }}
          >
            <InfoGraphic
            // width={`100%`}
            // height={`auto`}
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
